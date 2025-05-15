
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-bold mt-8 mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          We couldn't find the page you were looking for. Let's get you back on track.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link to="/">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
