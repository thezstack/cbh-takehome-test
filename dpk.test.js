const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKeyWithTextFoo", () => {
  it("Returns the matching hex", () => {
    const trivialKey = deterministicPartitionKey("foo");
    expect(trivialKey).toBe(
      "ff6ef7a99318e9f0fbd247413a2bb69337f834348e271f22c195534e366f12537a4ca7db174e8a591b6efc06b79b86a60ee6991dbd03739dc8c74c8bb7264667"
    );
  });
});

describe("deterministicPartitionKeyWithObject", () => {
  it("Returns the matching hex", () => {
    const trivialKey = deterministicPartitionKey({
      foo: "bar",
      partitionKey: "baz",
    });
    expect(trivialKey).toBe("baz");
  });
});
