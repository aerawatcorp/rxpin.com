"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import MyComponent from "./components/MenuItem";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(MyComponent, {
  name: "MyComponent",
});
