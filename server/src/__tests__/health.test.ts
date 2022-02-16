/// <reference types="jest"/>

import {health} from "../health";

test('gives valid health message', () => {
    expect(health().message).toBe("I am OK! Thank you for asking!");
});