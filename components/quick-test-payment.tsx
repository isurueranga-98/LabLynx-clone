"use client";
import { useQuickTestState } from "@/store";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GrNext, GrPrevious } from "react-icons/gr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Props = {
  handleBack: () => void;
  handleNext: () => void;
};

export const QuickTestPayment = ({
  handleBack,
  handleNext,
}: Props): React.JSX.Element => {
  const { selectedTests, paymentDetails, setPaymentDetails } =
    useQuickTestState((state) => state);

  // total fee
  const total =
    paymentDetails?.total ||
    selectedTests.reduce((acc, test) => acc + test.price, 0);

  // discount for total fee
  const [discount, setDiscount] = useState<number>(
    paymentDetails?.discount || 0,
  );

  // after discount applied
  const totalPayble =
    paymentDetails?.totalPayble || total - (total * discount) / 100;

  // initial payment
  const [initialPayment, setInitialPayment] = useState<number>(
    paymentDetails?.initialPayment || 0,
  );

  // balance after initial payment
  const balance = paymentDetails?.balance || totalPayble - initialPayment;

  // payment method
  const [paymentMethod, setPaymentMethod] = useState<
    "CASH" | "CARD" | "CHEQUE" | "ONLINE"
  >("CASH");

  return (
    <div className="m-auto w-3/4">
      {/* selected tests */}
      <div className="flex justify-between border-b-[1px] border-black pb-2">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-start">No</th>
              <th className="text-start">Test Name</th>
              <th className="text-start">Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedTests.map((test, index) => (
              <tr key={test.id}>
                <td>{index + 1}</td>
                <td>{test.name}</td>
                <td>{test.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* payment form */}
      <div>
        <div>
          <div className="flex items-center justify-between pr-36">
            <div>Total</div>
            <div>{total}</div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Discount (%)</div>
            <div>
              <Input onChange={(e) => setDiscount(Number(e.target.value))} />
            </div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Total payble</div>
            <div>{totalPayble}</div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Initial Payment</div>
            <div>
              <Input
                onChange={(e) => setInitialPayment(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Payment Method</div>
            <div className="py-2">
              <Select
                onValueChange={(e) =>
                  setPaymentMethod(e as "CASH" | "CARD" | "CHEQUE" | "ONLINE")
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Payment Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CASH">Cash</SelectItem>
                  <SelectItem value="CARD">Card</SelectItem>
                  <SelectItem value="CHEQUE">Cheque</SelectItem>
                  <SelectItem value="ONLINE">Online</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Balance</div>
            <div>{balance}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <Button onClick={handleBack}>
          <GrPrevious /> Select test
        </Button>
        <Button
          onClick={() => {
            setPaymentDetails({
              total,
              discount,
              totalPayble,
              initialPayment,
              balance,
              paymentMethod,
            });
            handleNext();
          }}
        >
          Receipt <GrNext />
        </Button>
      </div>
    </div>
  );
};
