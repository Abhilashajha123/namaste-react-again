import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlinestatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setOnlineStatus(false);
      console.log("offline");
    });

    window.addEventListener("online", (event) => {
      setOnlineStatus(true);
      console.log("online");
    });
  }, []);

  return onlinestatus;
};
export default useOnlineStatus;
