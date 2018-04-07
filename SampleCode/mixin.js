const _ = require('lodash')

/*
  SELECT p.firstname FROM Person p
  WHERE p.birthYear > 1903 and p.country IS NOT 'US'
  GROUP BY p.firstname
*/


_.mixin({
  'select': _.map,
  'from': _.chain,
  'where': _.filter,
  'sortBy': _.sortByOrder
})

// 실행 안됩니당
_.from(persons)
.where(p => p.birthYear > 1990 && p.address.country !== 'US')
.sortBy(['firstname'])
.select(p => p,firstname)
.value()

