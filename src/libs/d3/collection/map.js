/**
 * Created by liqiusheng-s on 16/9/01.
 * 工具类 map
 */
// import logs from '../../utils/logs'

// export var prefix = '$'
'use strict'
let prefix = '$' // node test

class Map {
  constructor () {
    // logs.log('Map construtor...')
    return this
  }
  has (key) {
    return (prefix + key) in this
  }
  get (key) {
    return this[prefix + key]
  }
  set (key, value) {
    this[prefix + key] = value
    return this
  }
  remove (key) {
    var property = prefix + key
    return property in this && delete this[property]
  }
  clear () {
    for (var property in this) if (property[0] === prefix) delete this[property]
  }
  keys () {
    var keys = new Array(Object.keys(this).length)
    var index = 0
    for (var property in this) if (property[0] === prefix) keys[index++] = property.slice(1)
    return keys
  }
  values () {
    var values = []
    for (var property in this) if (property[0] === prefix) values.push(this[property])
    return values
  }
  entries () {
    var entries = []
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]})
    return entries
  }
  size () {
    var size = 0
    for (var property in this) if (property[0] === prefix) ++size
    return size
  }
  empty () {
    for (var property in this) if (property[0] === prefix) return false
    return true
  }
  each (f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this)
  }
}

function map (object, f) {
  var map = new Map()

  // Copy constructor.
  if (object instanceof Map) object.each(function (value, key) { map.set(key, value) })

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1
    var n = object.length
    var o

    if (f == null) while (++i < n) map.set(i, object[i])
    else while (++i < n) map.set(f(o = object[i], i, object), o)
  } else if (object) {   // Convert object to map.
    for (var key in object) map.set(key, object[key])
  } else {
  }

  return map
}

export default map
// module.exports = map
