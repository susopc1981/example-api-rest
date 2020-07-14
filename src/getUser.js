const SINGLE_USER = "https://reqres.in/api/users";
const getUser = async (id) => {
  try {
    const response = await fetch(`${SINGLE_USER}/${id}?delay=2`);
    const data = await response.json();
    if (!response.ok) {
      throw Error(response.statusText);
    }
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export default getUser;
