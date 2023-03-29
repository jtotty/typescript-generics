type Person = {
  name: string;
  age: number;
  birthdate: Date;
};

export function remapPerson<Key extends keyof Person>(
  key: Key,
  value: Person[Key],
) {
  if (key === "birthdate") {
    return new Date() as Person[Key];
  }

  return value;
}


const test1 = remapPerson('age', 23);
const test2 = remapPerson('birthdate', new Date());
