#!/usr/bin/env node

const bcrypt = require('bcryptjs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter admin password: ', (password) => {
  if (password.length < 8) {
    console.error('Password must be at least 8 characters');
    process.exit(1);
  }

  const hash = bcrypt.hashSync(password, 10);
  
  console.log('\n✅ Password hash generated!\n');
  console.log('Add this to your .env.local file:\n');
  console.log(`ADMIN_PASSWORD_HASH="${hash}"`);
  console.log('\n');
  
  rl.close();
});
