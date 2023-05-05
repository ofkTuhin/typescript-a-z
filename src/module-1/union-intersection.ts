// union type
type employe = {
  name: string;
  phone: number;
};
type developer = {
  id: number;
};

const member: employe | developer = {
  phone: 1,
  name: "tuhin",
  id: 33,
};

// intersection type

type i_employe = {
  name: string;
  phone: number;
};

type i_developer = i_employe & {
  id: number;
};

const i_member: i_developer = {
  phone: 1,
  name: "tuhin",
  id: 33,
};
