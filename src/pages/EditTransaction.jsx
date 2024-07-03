import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const placeholderTransactions = [
  { id: 1, date: "2023-10-01", amount: 200, type: "Expense", brand: "Nike" },
  { id: 2, date: "2023-10-05", amount: 150, type: "Expense", brand: "Adidas" },
  { id: 3, date: "2023-10-10", amount: 300, type: "Income", brand: "Puma" },
];

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const transactionToEdit = placeholderTransactions.find((t) => t.id === parseInt(id));
    setTransaction(transactionToEdit);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update transaction logic here
    navigate("/transactions");
  };

  if (!transaction) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Edit Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={transaction.date} onChange={(e) => setTransaction({ ...transaction, date: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" type="number" value={transaction.amount} onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="type">Type</Label>
              <Select value={transaction.type} onValueChange={(value) => setTransaction({ ...transaction, type: value })} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Income">Income</SelectItem>
                  <SelectItem value="Expense">Expense</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="brand">Brand</Label>
              <Select value={transaction.brand} onValueChange={(value) => setTransaction({ ...transaction, brand: value })} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Nike">Nike</SelectItem>
                  <SelectItem value="Adidas">Adidas</SelectItem>
                  <SelectItem value="Puma">Puma</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Save Changes</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditTransaction;