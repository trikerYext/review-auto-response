import { reviewAutoRespond } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";

import example_payload from './example_payload.json' assert { type: 'json' };

Deno.test("Test My Function", async () => {
    const input = example_payload;
    const output = await reviewAutoRespond(input);
    //assertEquals(input, output);
});