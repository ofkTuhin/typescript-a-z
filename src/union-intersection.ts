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

type i_developer = {
  id: number;
};

const i_member: i_employe & i_developer = {
  phone: 1,
  name: "tuhin",
  id: 33,
};
