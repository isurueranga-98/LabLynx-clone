"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { tests } from "@/lib/mock-data/tests";
import { Checkbox } from "@/components/ui/checkbox";
import { useQuickTestState } from "@/store";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { GrNext, GrPrevious } from "react-icons/gr";

type Props = {
  handleNext: () => void;
  handleBack: () => void;
};

export const QuickTestSelectTests = ({
  handleNext,
  handleBack,
}: Props): React.JSX.Element => {
  const { selectedTests, selectTest, clearTest } = useQuickTestState(
    (state) => state,
  );

  useEffect(() => {
    // console.log(selectedTests);
  }, [selectedTests]);

  const [filterValue, setFilterValue] = useState<string | null>(null);

  const handleSelect = (checked: boolean, testName: string) => {
    const test = tests.find((test) => test.name === testName);
    if (!test) return;
    if (checked) {
      selectTest(test);
    } else {
      clearTest(test);
    }
  };

  return (
    <div className="m-auto w-3/4">
      <div className="flex items-center space-x-3">
        <div>
          <p>Filter tests by name</p>
        </div>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFilterValue(e.target.value)
          }
        />
      </div>
      <br />
      <ScrollArea className="h-[200px]">
        {filterValue === null
          ? tests.map((test) => (
              <div key={test.name} className="flex items-center space-x-1">
                <Checkbox
                  checked={selectedTests.some((t) => t.name === test.name)}
                  onCheckedChange={(checked) =>
                    handleSelect(checked as boolean, test.name)
                  }
                />
                <p>{test.name}</p>
              </div>
            ))
          : tests
              .filter((test) => test.name.includes(filterValue!.toUpperCase()))
              .map((test) => (
                <div key={test.name} className="flex space-x-1">
                  <Checkbox
                    checked={selectedTests.some((t) => t.name === test.name)}
                    onCheckedChange={(checked) =>
                      handleSelect(checked as boolean, test.name)
                    }
                  />
                  <p>{test.name}</p>
                </div>
              ))}
      </ScrollArea>
      <div className="h-4"></div>
      <ScrollArea className="mb-4 h-[120px] w-full rounded-xl bg-[#F1F5F9] px-12 py-4">
        <div className="h-full w-full">
          <div className="flex flex-wrap space-x-6 space-y-2">
            {selectedTests.map((test) => (
              <div
                key={test.id}
                className="test-sm flex h-8 items-center justify-center space-x-2 rounded-2xl bg-violet-400 px-3 py-1 text-white"
              >
                <p>{test.name}</p>
                <IoCloseCircleSharp
                  className="h-6 w-6 cursor-pointer text-white"
                  onClick={() => clearTest(test)}
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
      <div className="flex justify-between">
        <Button onClick={handleBack}>
          <GrPrevious /> Patient information
        </Button>
        <Button onClick={handleNext}>
          Payment <GrNext />
        </Button>
      </div>
    </div>
  );
};
