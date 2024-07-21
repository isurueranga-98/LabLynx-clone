"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ELECTROLYTES_SERUM_TYPE } from "@availableTests/ELECTROLYTES_SERUM";

export const Form = (props: ELECTROLYTES_SERUM_TYPE) => {
  const [SERUM_SODIUM, SET_SERUM_SODIUM] = useState(0);
  const [SERUM_POTASSIUM, SET_SERUM_POTASSIUM] = useState(0);
  const [SERUM_CHLORIDE, SET_SERUM_CHLORIDE] = useState(0);

  const [note, setNote] = useState("");

  const configured =
    !!props.results[0].referenceRange.high &&
    !!props.results[0].referenceRange.low &&
    !!props.results[1].referenceRange.high &&
    !!props.results[1].referenceRange.low &&
    !!props.results[2].referenceRange.high &&
    !!props.results[2].referenceRange.low;

  return (
    <div className="flex justify-center">
      <table>
        <thead>
          <tr className="text-lg font-bold">
            <td className="px-4 py-2">Test</td>
            <td className="px-4 py-2">Result</td>
            <td className="px-4 py-2">Unit</td>
            <td className="px-4 py-2">Flag</td>
            <td className="px-4 py-2">Reference Range</td>
          </tr>
        </thead>
        <tbody>
          {/* ----------------------------------------------------------------------------------------------- */}
          <tr>
            <td className="px-4">{props.results["0"].name}</td>
            <td className="px-4">
              <div>
                <Input
                  disabled={!configured}
                  onChange={(e) => SET_SERUM_SODIUM(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">mmol/L</td>
            <td className="px-4">
              {!configured ? (
                <></>
              ) : (
                <span>
                  {SERUM_SODIUM < props.results[0].referenceRange.low!
                    ? "L"
                    : SERUM_SODIUM > props.results[0].referenceRange.high!
                      ? "H"
                      : ""}
                </span>
              )}
            </td>
            <td className="px-4">
              {/* render reference range */}(
              {!props.results["0"].referenceRange.low ? (
                <span className="text-sm text-destructive">NOT_CONFIGURED</span>
              ) : (
                props.results["0"].referenceRange.low
              )}{" "}
              -{" "}
              {!props.results["0"].referenceRange.high ? (
                <span className="text-sm text-destructive">NOT_CONFIGURED</span>
              ) : (
                props.results["0"].referenceRange.high
              )}
              ){/* ------------------------- */}
            </td>
          </tr>
          {/* ------------------------------------------------------------------------------------------------- */}
          <tr>
            <td className="px-4">{props.results["1"].name}</td>
            <td className="px-4">
              <div>
                <Input
                  disabled={!configured}
                  onChange={(e) => SET_SERUM_POTASSIUM(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">mmol/L</td>
            <td className="px-4">
              {!configured ? (
                <></>
              ) : (
                <span>
                  {SERUM_POTASSIUM < props.results[1].referenceRange.low!
                    ? "L"
                    : SERUM_POTASSIUM > props.results[1].referenceRange.high!
                      ? "H"
                      : ""}
                </span>
              )}
            </td>
            <td className="px-4">
              {" "}
              {/* render reference range */}(
              {!props.results["1"].referenceRange.low ? (
                <span className="text-sm text-destructive">NOT_CONFIGURED</span>
              ) : (
                props.results["1"].referenceRange.low
              )}{" "}
              -{" "}
              {!props.results["1"].referenceRange.high ? (
                <span className="text-sm text-destructive">NOT_CONFIGURED</span>
              ) : (
                props.results["1"].referenceRange.high
              )}
              ){/* ------------------------- */}
            </td>
          </tr>
          {/* ------------------------------------------------------------------------------------------------- */}
          <tr>
            <td className="px-4">{props.results["2"].name}</td>
            <td className="px-4">
              <div>
                <Input
                  disabled={!configured}
                  onChange={(e) => SET_SERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">mmol/L</td>
            <td className="px-4">
              {!configured ? (
                <></>
              ) : (
                <span>
                  {SERUM_CHLORIDE < props.results[2].referenceRange.low!
                    ? "L"
                    : SERUM_CHLORIDE > props.results[2].referenceRange.high!
                      ? "H"
                      : ""}
                </span>
              )}
            </td>
            <td className="px-4">
              ({/* render reference range */}
              {!props.results["2"].referenceRange.low ? (
                <span className="text-sm text-destructive">NOT_CONFIGURED</span>
              ) : (
                props.results["2"].referenceRange.low
              )}{" "}
              -{" "}
              {!props.results["2"].referenceRange.high ? (
                <span className="text-sm text-destructive">NOT_CONFIGURED</span>
              ) : (
                props.results["2"].referenceRange.high
              )}
              {/* ------------------------- */})
            </td>
          </tr>
          {/* ---------------------------------------------------------------------------------------------- */}
        </tbody>
      </table>
    </div>
  );
};
