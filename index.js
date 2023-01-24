const { deterministicPartitionKey } = require("./dpk");

console.log(deterministicPartitionKey());
console.log(deterministicPartitionKey("foo"));
console.log(deterministicPartitionKey({ foo: "bar", partitionKey: "baz" }));
