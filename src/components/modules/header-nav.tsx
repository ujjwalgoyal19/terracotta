import React from "react";
import { Button } from "../ui/button";

function HeaderNav() {
  return (
    <header className="flex items-center justify-between relative py-3 px-6">
      <h3>Terracotta</h3>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Search Bar
      </div>
      <div>
        <Button variant={"default"}>Start for free</Button>
      </div>
    </header>
  );
}

export default HeaderNav;
