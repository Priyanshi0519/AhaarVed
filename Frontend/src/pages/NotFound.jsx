import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted px-4">
      <div className="max-w-md w-full bg-card shadow-lg rounded-2xl p-8 text-center border">
        <h1 className="text-7xl font-extrabold text-primary">404</h1>
        <p className="text-xl mt-4 text-foreground">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-muted-foreground">
          It might have been removed or you might have typed the wrong URL.
        </p>
        
        <Button asChild size="lg" className="mt-6">
          <Link to="/user/dashboard">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
