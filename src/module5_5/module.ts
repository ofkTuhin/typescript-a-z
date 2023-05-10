interface Info {
  name: string;
  age: number;
}
export const getDeveloperName = <T, Info extends keyof T>(
  employee: T,
  key: Info
) => {
  return employee[key];
};
