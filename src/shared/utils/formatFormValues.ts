/* eslint-disable @typescript-eslint/no-explicit-any */
export const formatFormValue = (value: Record<string, any>) => {
  const formattedValue: Record<string, any> = {};

  Object.keys(value).forEach((key) => {
    const fieldValue = value[key];

    if (
      fieldValue !== "" &&
      fieldValue !== null &&
      fieldValue !== undefined &&
      (Array.isArray(fieldValue) ? fieldValue.length > 0 : true)
    ) {
      formattedValue[key] = fieldValue;
    }
  });

  return formattedValue;
};
