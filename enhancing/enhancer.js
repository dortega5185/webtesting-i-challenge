module.exports = {
  succeed,
  fail,
  repair,
  get,
}

function succeed(item) {
  if (item.enhancement < 20) {
    return { ...item, enhancement: item.enhancement + 1 }
  }
  return { ...item }
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 }
  } else if (item.enhancement === 15) {
    return { ...item, durability: item.durability - 10 }
  } else if (item.enhancement >= 16) {
    return {
      ...item,
      durability: item.durability - 10,
      enhancement: item.enhancement - 1,
    }
  }
  return { ...item }
}

function repair(item) {
  return { ...item, durability: 100 }
}

function get(item) {
  if (item.enhancement > 0) {
    return { ...item, name: `[+${item.enhancement}]${item.name}` }
  }
  return { ...item }
}
// [+7]Sword Art Online
