import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      checkAuth();
    });

    return () => subscription.unsubscribe();
  }, []);

  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [dbError, setDbError] = useState<string | null>(null);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      setUserEmail(session?.user?.email || null);
      setDbError(null); // Clear previous errors on new check

      if (session && requireAdmin) {
        // Check if user has admin role
        const { data: roles, error } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', session.user.id)
          .eq('role', 'admin')
          .maybeSingle();

        if (error) {
          console.error("Error checking role:", error);
          setDbError(error.message);
        }

        setIsAdmin(!!roles);
      } else if (session) {
        setIsAdmin(true);
      }
    } catch (error: any) {
      console.error("Auth check error:", error);
      setDbError(error.message || "Unknown auth error");
      // Do not log out user on error, just deny admin access if checking admin
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  if (requireAdmin && !isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md space-y-4">
          <h1 className="text-2xl font-bold text-destructive">Access Denied</h1>
          <p className="text-muted-foreground">
            You are logged in as <span className="font-mono text-foreground font-bold">{userEmail}</span>,
            but this account does not have admin privileges.
          </p>

          {dbError && (
            <div className="bg-destructive/10 border border-destructive/20 p-3 rounded-lg text-sm text-destructive text-left">
              <span className="font-bold">Database Error:</span> {dbError}
              <p className="mt-1 text-xs opacity-80">The user_roles table might be missing or RLS is blocking access.</p>
            </div>
          )}

          <div className="bg-muted p-4 rounded-lg text-left text-xs font-mono overflow-auto border border-border">
            <p className="text-muted-foreground mb-2">To grant admin access, run this SQL in your Supabase Dashboard:</p>
            <code className="block text-primary select-all">
              INSERT INTO public.user_roles (user_id, role)<br />
              SELECT id, 'admin'::public.app_role<br />
              FROM auth.users<br />
              WHERE email = '{userEmail}';
            </code>
          </div>

          <Button variant="outline" onClick={() => window.location.reload()}>
            I've run the SQL, try again
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
