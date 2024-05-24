const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms, ms));
};

const logger1 = (time) => console.log(`Resolved after ${time}ms`);

// Виклик функції для перевірки
delay(2000).then(logger1); // Resolved after 2000ms
delay(1000).then(logger1); // Resolved after 1000ms
delay(1500).then(logger1); // Resolved after 1500ms

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = async (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );
  return updatedUsers;
};

const logger = (updatedUsers) => console.table(updatedUsers);

// Використання async/await
toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = async (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);
  const canProcess = Math.random() > 0.3;

  if (canProcess) {
    return { id: transaction.id, delay };
  } else {
    throw new Error(`Failed to process transaction ${transaction.id}`);
  }
};

const logSuccess = (transaction) => {
  console.log(
    `Transaction ${transaction.id} processed in ${transaction.delay}ms`
  );
};

const logError = (error) => {
  console.warn(error.message);
};

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
