"use client";
import { useQuickTestState } from "@/store";
import { Button } from "@/components/ui/button";
import { GrNext, GrPrevious } from "react-icons/gr";
import { createQuickTestAction } from "@/lib/actions/quick-test/create-quick-test.action";
import { useState } from "react";
import { ValueIcon } from "@radix-ui/react-icons";
import { QuickTest } from "@/lib/schema/quick-test.schema";

type Props = {
  handleBack: () => void;
  handleNext: () => void;
};

export const QuickTestReceipt = ({
  handleBack,
  handleNext,
}: Props): React.JSX.Element => {
  const { patientDetails, selectedTests, paymentDetails } = useQuickTestState(
    (state) => state,
  );

  const [saving, setSaving] = useState<boolean>(false);
  const [receipt, setReceipt] = useState<QuickTest | null>(null);

  return (
    <div className="m-auto w-3/4">
      {/* patient details */}
      <div className="flex justify-between border-b-[1px] border-black pb-2">
        <div className="w-1/2">
          <p>
            <strong>Reference Number: </strong>
            <span>{receipt?.id}</span>
          </p>
          <p>
            <strong> Patient Name: </strong>
            <span>{`${patientDetails?.title ? patientDetails.title : ""} ${patientDetails?.firstName ? patientDetails.firstName : ""} ${patientDetails?.middleName ? patientDetails.middleName : ""} ${patientDetails?.lastName ? patientDetails.lastName : ""}`}</span>
          </p>
          <p>
            <strong> Age: </strong>
            <span>{`${patientDetails?.age.years ? patientDetails.age.years : "0"} years ${patientDetails?.age.months ? patientDetails.age.months : "0"} months ${patientDetails?.age.days ? patientDetails.age.days : "0"} days`}</span>
          </p>
          <p>
            <strong>Gender: </strong>
            <span>{patientDetails?.gender ? patientDetails.gender : ""}</span>
          </p>
        </div>
        <div className="flex w-1/2 justify-center">
          <div>
            <p>
              <strong> Referred By: </strong>
              <span>
                {patientDetails?.referredBy ? patientDetails.referredBy : ""}
              </span>
            </p>
            <p>
              <strong> Phone Number: </strong>
              <span>{patientDetails?.phone ? patientDetails.phone : ""}</span>
            </p>
            <p>
              <strong>Email: </strong>
              <span>{patientDetails?.email ? patientDetails.email : ""}</span>
            </p>
            <p>
              <strong> Address: </strong>
              <span>{`${patientDetails?.address.street ? patientDetails.address.street : ""}, ${patientDetails?.address.city ? patientDetails.address.city : ""}`}</span>
            </p>
          </div>
        </div>
      </div>
      {/* selected tests */}
      <div className="flex justify-between border-b-[1px] border-black pb-2">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-start">Test Name</th>
              <th className="text-start">Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedTests.map((test) => (
              <tr key={test.id}>
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
            <div>{paymentDetails?.total}</div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Discount (%)</div>
            <div>{paymentDetails?.discount}</div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Total payble</div>
            <div>{paymentDetails?.totalPayble}</div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Initial Payment</div>
            <div>{paymentDetails?.initialPayment}</div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Payment Method</div>
            <div>{paymentDetails?.paymentMethod}</div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Balance</div>
            <div>{paymentDetails?.balance}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <Button onClick={handleBack}>
          <GrPrevious /> Payment Details
        </Button>
        <Button
          disabled={saving || !!receipt}
          onClick={async () => {
            setSaving(true);
            const receipt = await createQuickTestAction({
              //@ts-ignore
              patientDetails,
              selectedTests,
              //@ts-ignore
              paymentDetails,
            });
            console.log(receipt);
            if (receipt.success) {
              setReceipt(receipt.data);
            } else {
              alert("Failed to save receipt");
            }

            setSaving(false);
            handleNext();
          }}
        >
          {saving ? <ValueIcon /> : "Save"} <GrNext />
        </Button>
      </div>
    </div>
  );
};