const LIST_USERS = "https://reqres.in/api/users";

const getUsers = async () => {
  try {
    const response = await fetch(`${LIST_USERS}?delay=3`);
    const data = await response.json();
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getUsers;
