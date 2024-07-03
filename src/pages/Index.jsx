import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Sneaker Accounting</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Track your sneaker transactions effortlessly. Add, view, edit, and
            delete your sneaker purchases with ease.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;