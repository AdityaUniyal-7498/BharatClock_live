import { useEffect, useState } from "react";

function CurrentTime() {
  const [time, settimeupdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      settimeupdate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p className="lead">
      This is the Current Date is : {time.toLocaleDateString()} and Time is :
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
