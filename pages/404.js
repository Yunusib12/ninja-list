import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    function timeOut() {
      setTimeout(() => {
        //router.go(-1)
        router.push("/");
      }, 3000);
    }

    timeOut();
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>
        Go back to the
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
        is 3 seconds...
      </p>
    </div>
  );
};

export default NotFound;
