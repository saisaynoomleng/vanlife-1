import { formatPrice } from "@/lib/utils";
import { NumberInputProps } from "sanity";

export const VanPriceInput = (props: NumberInputProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      {props.renderDefault(props)}
      {typeof props.value === "number" && (
        <p className="text-gray-600">
          Daily Rent is{" "}
          <span className="font-semibold">{formatPrice(props.value)}</span>
        </p>
      )}
    </div>
  );
};
