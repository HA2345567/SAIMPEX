import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Mail, Phone, MessageCircle, Calendar, Building, Package, Hash, FileText, Loader2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface Inquiry {
  id: string ;
  name: string;
  company: string | null;
  email: string;
  whatsapp: string | null;
  product: string | null;
  quantity: string | null;
  sample_request: boolean | null;
  message: string;
  status: string | null;
  created_at: string;
  updated_at: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);

  useEffect(() => {
    fetchInquiries();

    // Poll for changes every 30 seconds since realtime isn't running on the serverless Neon setup
    const interval = setInterval(fetchInquiries, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchInquiries = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token || '';

      const response = await fetch('/api/inquiries', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `Failed to load inquiries: ${response.statusText}`);
      }

      const data = await response.json();
      setInquiries(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to load inquiries",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (inquiryId: string, newStatus: string) => {
    setUpdatingStatus(inquiryId);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token || '';

      const response = await fetch('/api/inquiries', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          id: inquiryId,
          status: newStatus
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `Failed to update status: ${response.statusText}`);
      }

      toast({
        title: "Success",
        description: "Inquiry status updated successfully!",
      });

      fetchInquiries();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update status",
        variant: "destructive",
      });
    } finally {
      setUpdatingStatus(null);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const filteredInquiries = inquiries.filter((inquiry) => {
    if (filterStatus === "all") return true;
    return inquiry.status === filterStatus;
  });

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case "new":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "contacted":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "quoted":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "closed":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">SAIMPEX Admin</h1>
            <p className="text-sm text-muted-foreground">Inquiry Management Dashboard</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Inquiries</CardDescription>
              <CardTitle className="text-3xl">{inquiries.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>New</CardDescription>
              <CardTitle className="text-3xl text-blue-600">
                {inquiries.filter((i) => i.status === "new").length}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>In Progress</CardDescription>
              <CardTitle className="text-3xl text-yellow-600">
                {inquiries.filter((i) => i.status === "contacted" || i.status === "quoted").length}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Closed</CardDescription>
              <CardTitle className="text-3xl text-green-600">
                {inquiries.filter((i) => i.status === "closed").length}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Filter */}
        <div className="mb-6">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Inquiries</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="quoted">Quoted</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Inquiries List */}
        <div className="space-y-4">
          {filteredInquiries.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No inquiries found.</p>
              </CardContent>
            </Card>
          ) : (
            filteredInquiries.map((inquiry) => (
              <Card key={inquiry.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <CardTitle className="text-xl">{inquiry.name}</CardTitle>
                        {inquiry.sample_request && (
                          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                            Sample Request
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDistanceToNow(new Date(inquiry.created_at), { addSuffix: true })}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getStatusColor(inquiry.status)}>
                        {inquiry.status || "new"}
                      </Badge>
                      <Select
                        value={inquiry.status || "new"}
                        onValueChange={(value) => handleStatusUpdate(inquiry.id, value)}
                        disabled={updatingStatus === inquiry.id}
                      >
                        <SelectTrigger className="w-[140px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="quoted">Quoted</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${inquiry.email}`} className="hover:text-accent">
                        {inquiry.email}
                      </a>
                    </div>
                    {inquiry.whatsapp && (
                      <div className="flex items-center gap-2 text-sm">
                        <MessageCircle className="h-4 w-4 text-muted-foreground" />
                        <a
                          href={`https://wa.me/${inquiry.whatsapp.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent"
                        >
                          {inquiry.whatsapp}
                        </a>
                      </div>
                    )}
                    {inquiry.company && (
                      <div className="flex items-center gap-2 text-sm">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span>{inquiry.company}</span>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  {(inquiry.product || inquiry.quantity) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                      {inquiry.product && (
                        <div className="flex items-center gap-2 text-sm">
                          <Package className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Product:</span>
                          <span>{inquiry.product}</span>
                        </div>
                      )}
                      {inquiry.quantity && (
                        <div className="flex items-center gap-2 text-sm">
                          <Hash className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Quantity:</span>
                          <span>{inquiry.quantity}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Message */}
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      Message:
                    </div>
                    <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-md">
                      {inquiry.message}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
