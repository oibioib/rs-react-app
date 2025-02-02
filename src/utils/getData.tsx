const getData = async (response: Response) => {
  try {
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};

export default getData;
