var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// src/client/index.ts
import { Client } from "discord.js";

// src/client/db/index.ts
import path2 from "path";
import mongoose from "mongoose";

// src/functions.ts
var functions_exports = {};
__export(functions_exports, {
  Arrayify: () => Arrayify,
  capitalize: () => capitalize,
  convertToCamelCase: () => convertToCamelCase,
  createDate: () => createDate,
  generateRandomString: () => generateRandomString,
  getFileByName: () => getFileByName,
  getFiles: () => getFiles,
  getFilesByExtention: () => getFilesByExtention,
  isNewable: () => isNewable,
  removeDups: () => removeDups,
  sanitizePath: () => sanitizePath,
  wait: () => wait
});
import fs from "fs";
import path from "path";

// src/settings.ts
var _Settings = class {
  errors = _Settings.errors;
  characters = _Settings.characters;
  regex = _Settings.regex;
  command = _Settings.command;
  constants = _Settings.constants;
};
var Settings = _Settings;
__publicField(Settings, "noReason", "No Reason Required");
__publicField(Settings, "noDescription", "No Description");
__publicField(Settings, "errors", {
  defaultSettings: {
    errorSystem: true,
    handleDefault: true,
    handleMoose: true,
    emitOnError: true,
    emitOnMooseError: true,
    emitOnDiscordError: true,
    keepBotRunning: true,
    errorHandling: "default",
    shardErrorHandling: "default",
    customErrors: [],
    log: "error"
  },
  disabled: {
    errorSystem: false
  }
});
__publicField(Settings, "characters", {
  special: "!@#$%^&*()-=_+`~,./<>?;':\"[]\\|}{",
  lower: "qwertyuiopasdfghjklzxcvbnm",
  upper: "QWERTYUIOPLKJHGFDSAMNBVCXZ",
  number: "1234567890"
});
__publicField(Settings, "regex", {
  commandReplacer: /\s/i
});
__publicField(Settings, "command", {
  defaultEphemeral: false,
  dmOnlyDefault: false,
  defaultHidden: false,
  defaultOwnerOnly: false,
  defaultGuarded: false,
  defaultChannelOnly: false,
  defaultArgStyle: "multiple",
  argStyleArray: ["string", "single", "multiple", "array", "list"],
  defaultCacheResult: false,
  defaultNSFW: true,
  defaultNSFWOnly: false,
  defaultRest: true,
  defaultAdminOnly: false,
  defaultModOnly: false,
  defaultAllowExtraArgs: true,
  defaultInteractions: true,
  defaultArgSplitter: " ",
  defaultLastRunBy: 10,
  defaultAutoAlias: true,
  defaultCapsSensitive: true,
  defaultTestOnly: false,
  defaultSlash: true,
  defaultCommandOptions: {
    description: _Settings.noDescription,
    options: []
  },
  defaultCommndSubOption: {
    choices: [],
    autocomplete: true,
    required: true
  }
});
__publicField(Settings, "constants", {
  speedOfSound: new Number(767),
  regex: {
    numberStringFormat: /([\d].?[/w])/gi,
    mongoURIRegex: /((mongodb\+srv)|(mongodb)):\/\/([a-zA-Z0-9%_\.-])*:([a-zA-Z0-9%_\.-])*(@([a-zA-Z0-9%_\.-])*)(:\d{4})?\/(([a-zA-Z0-9%_\.-])*)/g
  }
});
__publicField(Settings, "physics", {
  defaultGravityConstant: 6,
  speed: (distance, time) => distance / time,
  distance: (speed, time) => speed * time,
  time: (distance, speed) => distance / speed,
  forceOfGravity: function(unit) {
  },
  aeronautics: {
    calculateWingLoading: (weight, wingArea) => weight / wingArea,
    calculateLiftCoefficent,
    calculateLiftForce: (liftCoefficent, fluidDensity, fluidVelocity, area) => liftCoefficent * (fluidDensity * (fluidVelocity * fluidDensity) / 2) * area
  }
});
function calculateLiftCoefficent(liftForce, relevantSurfaceArea, pressureDensity, velocity) {
  let cL;
  if (typeof velocity !== "number")
    cL = liftForce / (relevantSurfaceArea * pressureDensity);
  else
    cL = 2 * liftForce / (pressureDensity * (velocity * velocity) * relevantSurfaceArea);
  return cL;
}
var settings_default = Settings;

// src/functions.ts
import { setTimeout as wait } from "timers/promises";

// src/enums.ts
var TimeUnitConversionFromMiliseconds = /* @__PURE__ */ ((TimeUnitConversionFromMiliseconds2) => {
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["femtosecond"] = 1e12] = "femtosecond";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["picosecond"] = 1e9] = "picosecond";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["nanosecond"] = 1e6] = "nanosecond";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["microsecond"] = 1e3] = "microsecond";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["milisecond"] = 1] = "milisecond";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["second"] = 1e-3] = "second";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["minute"] = 1667e-8] = "minute";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["hour"] = 27778e-11] = "hour";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["day"] = 11574e-12] = "day";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["week"] = 16534e-13] = "week";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["fortnight"] = 82672e-14] = "fortnight";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["month"] = 38052e-14] = "month";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["year"] = 3171e-14] = "year";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["sidereal year"] = 31688e-15] = "sidereal year";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["decade"] = 3171e-15] = "decade";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["century"] = 3171e-16] = "century";
  TimeUnitConversionFromMiliseconds2[TimeUnitConversionFromMiliseconds2["milennium"] = 3171e-17] = "milennium";
  return TimeUnitConversionFromMiliseconds2;
})(TimeUnitConversionFromMiliseconds || {});

// src/functions.ts
function sanitizePath(dirpath, removeCWD = false) {
  dirpath = dirpath.toString();
  dirpath = removeCWD ? dirpath.replace(process.cwd(), "") : dirpath;
  return dirpath.replace(/\\/g, "/");
}
function getFiles(dirpath = process.cwd()) {
  const files = fs.readdirSync(dirpath, { withFileTypes: true });
  let funkyFiles = [];
  files.forEach((file) => {
    if (file.isDirectory())
      funkyFiles = [...funkyFiles, ...getFiles(path.join(String(dirpath), file.name))];
    else if (!file.name.startsWith("!") || file.name.endsWith(".js")) {
      let fileName = file.name.replace(/\\/g, "/").split("/");
      fileName = fileName[fileName.length - 1].split(".")[0].toLowerCase();
      funkyFiles.push([`${dirpath}/${file.name}`, fileName]);
    }
  });
  return funkyFiles;
}
function getFileByName(name) {
  name = name.toLowerCase();
  const files = getFiles(__dirname);
  const withName = [];
  for (const file of files) {
    if (file[1] === name)
      withName.push(file);
  }
  return withName;
}
function getFilesByExtention(extention) {
  if (!extention.startsWith("."))
    throw new SyntaxError(`${extention} is not a valid extention.`);
  extention = extention.toLowerCase();
  const files = getFiles(__dirname);
  const withName = [];
  for (const file of files) {
    if (file[0].endsWith(extention))
      withName.push(file);
  }
  return withName;
}
function Arrayify(object, key) {
  if (typeof object === "string")
    return [object];
  if (Array.isArray(object))
    return object;
  const array = [];
  Object.keys(object).forEach((objkey) => {
    const obj = {};
    obj[key ?? objkey] = object[objkey];
    array.push(obj);
  });
  return array;
}
function generateRandomString(length = 16) {
  let string = "";
  let chars = "";
  let len;
  if (typeof length === "object") {
    chars += (length.caps ? settings_default.characters.upper : "") + (length.lower ? settings_default.characters.lower : "") + (length.numbers ? settings_default.characters.number : "") + (length.special ? settings_default.characters.special : "");
    if (!Array.isArray(length.exclude)) {
      length.exclude = typeof length.exclude === "undefined" ? [] : [length.exclude];
    }
    length.exclude.forEach((char) => {
      chars.replace(char.toString(), "");
    });
    len = length.length;
  } else if (typeof length === "number" || !isNaN(parseInt(length))) {
    chars += settings_default.characters.lower + settings_default.characters.number + settings_default.characters.special + settings_default.characters.upper;
    len = length;
  } else
    throw new SyntaxError("Invalid Input");
  for (let i = 0; i < len; i++) {
    string += chars[Math.floor(Math.random() * chars.length)];
  }
  return string;
}
function capitalize(str) {
  let split = str.split("");
  split[0] = split[0].toUpperCase();
  return split.join("");
}
function convertToCamelCase(str) {
  str[0] = str[0].toLowerCase();
  for (let i = 0; i < str.length; i++) {
    str[i] = capitalize(str[i]);
  }
  return str.join("");
}
function removeDups(array) {
  return array.filter((value, index) => array.indexOf(value) === index);
}
function isNewable(object) {
  if (object.toString().substring(0, 5) === "class")
    return true;
  return false;
}
function createDate(timeString) {
  if (typeof timeString === "number")
    return new Date(timeString);
  if (timeString instanceof Date)
    return timeString;
  let newDate = new Date();
  timeString = timeString.toLowerCase();
  const matches = timeString.match(settings_default.constants.regex.numberStringFormat);
  if (matches == null)
    return newDate;
  let addedTime = 0;
  matches.forEach((time) => {
    const amountOfUnit = parseInt(time);
    const unit = parseInt(TimeUnitConversionFromMiliseconds[time.replace(/[^a-z]/gi, "")]);
    if (typeof unit !== "number")
      throw new SyntaxError(`${unit} is not a valid time unit`);
    addedTime += unit * amountOfUnit;
  });
  newDate.setMilliseconds(newDate.getMilliseconds() + addedTime);
  return newDate;
}

// src/client/db/index.ts
var DataBaseManager = class {
  _client;
  mongoURI;
  options;
  _connection;
  _models = {};
  constructor(client, options) {
    this.options = typeof options === "string" ? { mongoURI: options } : options;
    if (!Array.isArray(this.options.mongoURI.match(settings_default.constants.regex.mongoURIRegex)))
      throw new SyntaxError(`"${this.options.mongoURI}" is not a valid MongoDB URI`);
    this.mongoURI = this.options.mongoURI;
    this._client = client;
    this.options.keepAlive = true;
  }
  async setup() {
    try {
      this._connection = await mongoose.connect(this.mongoURI, this.options);
      await this._getSchemas(this.options.schemaPath);
      return this;
    } catch (error) {
      throw error;
    }
  }
  async _getSchemas(schemaPath = path2.join(__dirname, "schemas")) {
    const files = getFiles(schemaPath);
    for (const [filePath, fileName] of files) {
      const content = await import(filePath);
      const modelName = capitalize(fileName.toLowerCase().replace("model", "").replace("schema", ""));
      if (content instanceof mongoose.Schema) {
        this._models[modelName] = mongoose.model(modelName, content);
      }
    }
  }
  get connection() {
    return this._connection;
  }
  get models() {
    return this._models;
  }
  _registerModel(modelName, model) {
    this._models[modelName] = mongoose.model(modelName, model);
  }
  getModel(modelName) {
    return this._models[modelName];
  }
  async _dbInit() {
    if (this.options.defaultModels === "all") {
    }
  }
};
var db_default = DataBaseManager;

// src/extentions/chalk.extextions.ts
import { Chalk } from "chalk";
var DisCrackChalk = class extends Chalk {
  constructor(level) {
    super({ level });
  }
};
var chalk_extextions_default = DisCrackChalk;

// src/logger.ts
import figlet from "figlet";
var PriorityColors = /* @__PURE__ */ ((PriorityColors2) => {
  PriorityColors2["high"] = "#FF0000";
  PriorityColors2["med"] = "#FFFF00";
  PriorityColors2["low"] = "#00ff00";
  PriorityColors2["none"] = "visible";
  return PriorityColors2;
})(PriorityColors || {});
var MooseLogger = class {
  _options;
  _client;
  constructor(client, options) {
    this._options = options;
    this._client = client;
  }
  log(text, priority = "none", style = this._options) {
    let newValue = text;
    if (style.box) {
      newValue = figlet.textSync(newValue, style);
    }
    if (style.color || priority !== "none") {
      if (priority !== "none" && !style.color) {
        style.color = PriorityColors[priority];
      }
      let options = {
        modifiers: style.fontStyles
      };
      if (Array.isArray(style.color)) {
        if (style.color.length !== 3)
          style.color = [...style.color, ...[0, 0, 0]].slice(0, 3);
        style.color.forEach((value, index) => {
          if (value > 255 || value < 0)
            throw new SyntaxError(`RGB value at index ${index} is invalid.`);
        });
        options.rgb = style.color;
      } else if (typeof style.color === "object") {
        options.rgb = {
          red: style.color.red ?? style.color.r,
          green: style.color.green ?? style.color.g,
          blue: style.color.blue ?? style.color.b
        };
      } else if (style.color.match(/#?([A-Z0-9]{5,6})/gi) != null) {
        options.hex = style.color.match(/#?([A-Z0-9]{5,6})/gi)[0];
      } else
        options.color = style.color;
      newValue = this.chalkIt(newValue, options);
    }
    return this._res(newValue, style);
  }
  _res(text, style) {
    if (style.return === true)
      return text;
    else
      return console.log(text);
  }
  chalkIt(text, { color, modifiers, hex, rgb }) {
    const chalkClient = new this._client.chalkClass(this._client.performance === "high" ? 2 : 3);
    if (color)
      text = chalkClient[color](text);
    else if (hex)
      text = chalkClient.hex(hex)(text);
    else if (rgb) {
      if (Array.isArray(rgb))
        text = chalkClient.rgb(...rgb)(text);
      else {
        const rgbo = rgb;
        text = chalkClient.rgb(rgbo.r ?? rgbo.red, rgbo.g ?? rgbo.green, rgbo.b ?? rgbo.blue)(text);
      }
    }
    if (modifiers) {
      modifiers = Array.isArray(modifiers) ? modifiers : [modifiers];
      modifiers.forEach((mod) => {
        text = chalkClient[mod](text);
      });
    }
    return text;
  }
};
var logger_default = MooseLogger;

// src/extentions/error.extentions.ts
var MooseError = class extends Error {
  client;
  constructor(client, error) {
    super(error);
    this.client = client;
    this.message;
  }
};
var MooseCacheError = class extends MooseError {
  cache;
  constructor(client, cache, error) {
    super(client, error);
    this.cache = cache;
  }
};

// src/client/cache/microCache.ts
var MicroCache = class extends Map {
  _cache = {};
  constructor(entries) {
    super(entries);
  }
  set(key, value, expiration) {
    return super.set(key, {
      id: key,
      expires: expiration,
      value,
      time: new Date()
    });
  }
  get(key) {
    var _a;
    return (_a = super.get(key)) == null ? void 0 : _a.value;
  }
  forEach(callbackfn) {
    const displayMap = /* @__PURE__ */ new Map();
    super.forEach((cachedVal, cachedKey) => {
      displayMap.set(cachedKey, cachedVal.value);
    });
    super.forEach((cacheVal, cacheKey) => {
      callbackfn(cacheVal.value, cacheKey, displayMap);
    });
    displayMap.forEach((val, key) => {
      super.set(key, { value: val, id: key, time: new Date() });
    });
  }
  strictForEach(callbackfn) {
    super.forEach(callbackfn);
  }
  cacheResults(name, callbackfn, { args = [], expires, resultsDependOnArgs = true, capsSensitiveArgs = true }) {
    if (typeof this._cache[name] !== "undefined") {
      if (resultsDependOnArgs && args.length > 0) {
        if (typeof this._cache[name][this._formatArgs(args, capsSensitiveArgs)] !== "undefined")
          return this._cache[name][this._formatArgs(args, capsSensitiveArgs)];
      } else {
        if (typeof this._cache[name] !== "undefined")
          return this._cache[name];
      }
    }
    const result = callbackfn(...args);
    if (resultsDependOnArgs && args.length > 0) {
      this._cache[name][this._formatArgs(args, capsSensitiveArgs)] = { expires, result };
    } else
      this._cache[name] = { expires, result };
    return result;
  }
  _formatArgs(args, capsSensitive) {
    const jsonArgs = JSON.stringify(args, null, "").replace(/[\s]/gi, "");
    if (capsSensitive)
      return jsonArgs;
    return jsonArgs.toLowerCase();
  }
};
var microCache_default = MicroCache;

// src/client/cache/index.ts
var MooseCache = class {
  _lastSweptDate = new Date();
  _cache = /* @__PURE__ */ new Map();
  _client;
  _sizeLimit;
  options;
  id;
  constructor(client, options) {
    this._client = client;
    this.options = options;
    this.id = client.generateCacheId(options.group);
    client.reportCache(this);
    this._sizeLimit = options.size ?? 200;
  }
  get lastSwept() {
    return this._lastSweptDate;
  }
  get sizeLimit() {
    return this._sizeLimit;
  }
  set sizeLimit(size) {
    this._sizeLimit = size;
    this._smartSweeper(size, "Size Limit Change");
  }
  _dumbSweeper(reason = "No Reason Provided") {
    this._cache.clear();
    this._lastSweptDate = new Date();
    this._client.logger.log(`${this.id} was cleared at ${this._lastSweptDate.toLocaleTimeString("cst")}`);
    return this._cache;
  }
  _smartSweeper(amount = 50, reason = "No Reason Provied") {
    const sweepDate = new Date();
    if (amount >= this._cache.size) {
      return this._dumbSweeper(reason);
    }
    const ogLength = this._cache.size;
    let sorted = [...this._cache];
    sorted = sorted.sort((a, b) => {
      return a[1].time.getTime() - b[1].time.getTime();
    }).filter((value) => {
      if (value[1].expires && value[1].expires.getTime() > sweepDate.getTime())
        return false;
      return true;
    });
    this._cache = new Map(sorted.slice(0, sorted.length - amount));
    this._lastSweptDate = new Date();
    this._client.logger.log(`${this.id} cleared ${Math.abs(ogLength - this._cache.size)} items at ${this._lastSweptDate.toLocaleTimeString("cst")}`);
    return this._cache;
  }
  clean(reason = "No Reason Provied", amount) {
    if (amount)
      return this._smartSweeper(amount, reason);
    else
      return this._dumbSweeper(reason);
  }
  insert(id, value, options) {
    let { expires, overwrite = true, errorIfFull = false, deleteIfFull = "oldest", errorIfExists = false } = options;
    const exists = typeof this._cache.get(id) !== "undefined";
    if (exists && errorIfExists == true && overwrite == false)
      throw new MooseCacheError(this._client, this, `The ID ${id} already exists in Cache ${this.id}`);
    if (this.isFull()) {
      if (deleteIfFull === "all")
        this._dumbSweeper("Automatic Sweep: Storage full");
      else if (deleteIfFull === "oldest")
        this._deleteOldest();
      else if (errorIfFull === true)
        throw new MooseCacheError(this._client, this, `Cache ${this.id} is full`);
    }
    if (typeof expires !== "undefined")
      expires = this._client.functions.createDate(expires);
    const cacheValue = this.generateCacheItem(value, expires);
    this._cache.set(cacheValue.id, cacheValue);
    return cacheValue.id;
  }
  _deleteOldest() {
    return this._smartSweeper(1, "Automatic Sweep: Storage full");
  }
  sweepCache(newSize = 50, reason = "No Reason Provided") {
    reason = this._reasonFormatter(reason, true);
    if (newSize.all || newSize.toString().toLowerCase() === "all")
      return this._dumbSweeper(reason);
    if (typeof newSize === "object") {
      newSize = newSize;
      if (typeof newSize.newSize === "undefined" && typeof newSize.sweepAmount === "undefined")
        throw new SyntaxError("Invalid Reason Type");
      return typeof newSize.newSize === "number" ? this._smartSweeper(Math.abs(newSize.newSize - this._cache.size), reason) : this._smartSweeper(newSize.sweepAmount, reason);
    } else if (typeof newSize === "number") {
      return this._smartSweeper(newSize, reason);
    } else
      throw new SyntaxError("Invalid Input Type");
  }
  _reasonFormatter(reason, manual = true) {
    const strPrefix = manual ? "Manual Sweep: " : "Automatic Sweep: ";
    if (typeof reason !== "string")
      throw new SyntaxError("Invalid Reason Type");
    return reason.toLowerCase().startsWith(strPrefix.toLowerCase()) ? reason : strPrefix + reason;
  }
  isFull() {
    return this._cache.size >= this.sizeLimit;
  }
  generateCacheItem(value, expires) {
    return {
      time: new Date(),
      id: value[this.options.idProp || ""] ?? value.id ?? value._id ?? this._client.functions.generateRandomString(6),
      value,
      expires
    };
  }
  MicroCache = microCache_default;
};
__publicField(MooseCache, "MicroCache", microCache_default);
var cache_default = MooseCache;

// src/client/index.ts
var _botToken;
var MooseClient = class {
  constructor(token, options) {
    __privateAdd(this, _botToken, void 0);
    __publicField(this, "owner");
    __publicField(this, "testingServers");
    __publicField(this, "testingUsers");
    __publicField(this, "testing");
    __publicField(this, "dbc");
    __publicField(this, "_connection");
    __publicField(this, "logs");
    __publicField(this, "performance");
    __publicField(this, "MooseEvents", ["Mooseerror"]);
    __publicField(this, "chalkClass", chalk_extextions_default);
    __publicField(this, "logger");
    __publicField(this, "errorOptions");
    __publicField(this, "_caches", /* @__PURE__ */ new Map());
    __publicField(this, "commandDir");
    __publicField(this, "featuresDir");
    __publicField(this, "functions", functions_exports);
    __publicField(this, "constants", settings_default.constants);
    __publicField(this, "_client");
    __publicField(this, "user");
    __publicField(this, "users");
    __publicField(this, "voice");
    __publicField(this, "ws");
    __publicField(this, "application");
    __publicField(this, "channels");
    __publicField(this, "guilds");
    __publicField(this, "options");
    __publicField(this, "readyTimestamp");
    __publicField(this, "sweepers");
    __publicField(this, "shard");
    __publicField(this, "token");
    __publicField(this, "rest");
    __publicField(this, "settings", new settings_default());
    options = options ?? {};
    const {
      testing = false,
      testingServers = [],
      testingUsers = [],
      owner = [],
      intents = ["MessageContent", "Guilds", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessages", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping", "GuildScheduledEvents"],
      shards = "auto",
      shardCount,
      closeTimeout,
      makeCache,
      allowedMentions,
      partials,
      failIfNotExists,
      presence = {},
      waitGuildTimeout,
      sweepers,
      ws,
      rest,
      jsonTransformer,
      db = false,
      testingLogs = false,
      performance = "low",
      errors = true,
      commandDir = "commands",
      featuresDir = "features"
    } = options;
    __privateSet(this, _botToken, token);
    this.owner = this.functions.Arrayify(owner);
    this.testing = typeof testing === "boolean" ? testing : false;
    this.testingServers = this.functions.Arrayify(testingServers);
    this.testingUsers = this.functions.Arrayify(testingUsers);
    this.dbc = db || void 0;
    this.logs = testingLogs;
    this.performance = performance;
    this.logger = new logger_default(this, {});
    this.errorOptions = errors;
    this.commandDir = this._formatDir(commandDir);
    this.featuresDir = this._formatDir(featuresDir);
    this._client = new Client(options);
    this.channels = this._client.channels;
    this.guilds = this._client.guilds;
    this.options = this._client.options;
    this.sweepers = this._client.sweepers;
    this.shard = this._client.shard;
    this.rest = this._client.rest;
    this.users = this._client.users;
    this.voice = this._client.voice;
    this.ws = this._client.ws;
  }
  get emojis() {
    throw new Error("Method not implemented.");
  }
  get readyAt() {
    throw new Error("Method not implemented.");
  }
  get uptime() {
    throw new Error("Method not implemented.");
  }
  destroy() {
    throw new Error("Method not implemented.");
  }
  fetchGuildPreview(guild) {
    throw new Error("Method not implemented.");
  }
  fetchInvite(invite, options) {
    throw new Error("Method not implemented.");
  }
  fetchGuildTemplate(template) {
    throw new Error("Method not implemented.");
  }
  fetchVoiceRegions() {
    throw new Error("Method not implemented.");
  }
  fetchSticker(id) {
    throw new Error("Method not implemented.");
  }
  fetchPremiumStickerPacks() {
    throw new Error("Method not implemented.");
  }
  fetchWebhook(id, token) {
    throw new Error("Method not implemented.");
  }
  fetchGuildWidget(guild) {
    throw new Error("Method not implemented.");
  }
  generateInvite(options) {
    throw new Error("Method not implemented.");
  }
  login(token) {
    throw new Error("Method not implemented.");
  }
  isReady() {
    throw new Error("Method not implemented.");
  }
  toJSON() {
    throw new Error("Method not implemented.");
  }
  on(event, listener) {
    throw new Error("Method not implemented.");
  }
  once(event, listener) {
    throw new Error("Method not implemented.");
  }
  emit(event, ...args) {
    throw new Error("Method not implemented.");
  }
  off(event, listener) {
    throw new Error("Method not implemented.");
  }
  removeAllListeners(event) {
    throw new Error("Method not implemented.");
  }
  addListener(eventName, listener) {
    throw new Error("Method not implemented.");
  }
  removeListener(eventName, listener) {
    throw new Error("Method not implemented.");
  }
  setMaxListeners(n) {
    throw new Error("Method not implemented.");
  }
  getMaxListeners() {
    throw new Error("Method not implemented.");
  }
  listeners(eventName) {
    throw new Error("Method not implemented.");
  }
  rawListeners(eventName) {
    throw new Error("Method not implemented.");
  }
  listenerCount(eventName) {
    throw new Error("Method not implemented.");
  }
  prependListener(eventName, listener) {
    throw new Error("Method not implemented.");
  }
  prependOnceListener(eventName, listener) {
    throw new Error("Method not implemented.");
  }
  eventNames() {
    throw new Error("Method not implemented.");
  }
  async start() {
    if (this.dbc)
      this._connection = await new db_default(this, this.dbc).setup();
    this.on("ready", () => {
    });
    try {
      await this.login(__privateGet(this, _botToken));
    } catch (error) {
      this.emit("MooseError", error);
    }
  }
  get db() {
    if (this._connection)
      return this._connection;
    return void 0;
  }
  reportCache(cache) {
    if (!(cache instanceof cache_default))
      throw new SyntaxError("Cache is not a valid cache");
    if (typeof this._caches.get(cache.id) !== "undefined")
      return false;
    this._caches.set(cache.id, cache);
    return true;
  }
  get caches() {
    return this._caches;
  }
  get usedCacheIds() {
    return this._caches.keys();
  }
  generateCacheId(group) {
    const id = `cache${`-${this.functions.capitalize(String(group))}` || ""}-${this.functions.generateRandomString(6)}`;
    if (typeof this._caches.get(id) === "undefined")
      return this.generateCacheId(group);
    return id;
  }
  getCache(id) {
    return this._caches.get(id);
  }
  createCache(group) {
    const newCache = new cache_default(this, { group });
    if (typeof group === "string" && this.caches.get(group)) {
    }
  }
  _formatDir(dir) {
    const splitDir = dir.toString().replace(process.cwd(), "").replace(/\\/g, "/").split("/");
    return splitDir[splitDir.length - 1];
  }
  async fetchGuild(id) {
    if (typeof id === "string")
      return new guild_extentions_default(this, await this.guilds.fetch(id));
    if (id instanceof guild_extentions_default)
      return id;
    if (id) {
      return void 0;
    }
    return void 0;
  }
  autoCache(funct, options = {}) {
  }
};
_botToken = new WeakMap();
__publicField(MooseClient, "functions", functions_exports);
__publicField(MooseClient, "constants", settings_default.constants);
__publicField(MooseClient, "settings", new settings_default());
var client_default = MooseClient;

// src/extentions/guild.extentions.ts
var MooseGuild = class {
  client;
  discordGuild;
  afkChannelId;
  afkTimeout;
  applicationId;
  approximateMemberCount;
  approximatePresenceCount;
  available;
  bans;
  channels;
  commands;
  defaultMessageNotifications;
  discoverySplash;
  emojis;
  explicitContentFilter;
  invites;
  joinedTimestamp;
  large;
  maximumMembers;
  maximumPresences;
  memberCount;
  members;
  mfaLevel;
  ownerId;
  preferredLocale;
  premiumProgressBarEnabled;
  premiumTier;
  presences;
  publicUpdatesChannelId;
  roles;
  rulesChannelId;
  scheduledEvents;
  shardId;
  stageInstances;
  stickers;
  systemChannelFlags;
  systemChannelId;
  vanityURLUses;
  voiceStates;
  widgetChannelId;
  widgetEnabled;
  createTemplate;
  delete;
  discoverySplashURL;
  edit;
  editWelcomeScreen;
  equals;
  fetchAuditLogs;
  fetchIntegrations;
  fetchOwner;
  fetchPreview;
  fetchTemplates;
  fetchVanityData;
  fetchWebhooks;
  fetchWelcomeScreen;
  fetchWidget;
  fetchWidgetSettings;
  leave;
  setAFKChannel;
  setAFKTimeout;
  setBanner;
  setDefaultMessageNotifications;
  setDiscoverySplash;
  setExplicitContentFilter;
  setIcon;
  setName;
  setOwner;
  setPreferredLocale;
  setPublicUpdatesChannel;
  setRulesChannel;
  setSplash;
  setSystemChannel;
  setSystemChannelFlags;
  setVerificationLevel;
  setPremiumProgressBarEnabled;
  setWidgetSettings;
  setMFALevel;
  toJSON;
  id;
  constructor(client, guild) {
    this.client = client;
    this.discordGuild = guild;
    this.leave = guild.leave;
    this.toJSON = guild.toJSON;
    this.setAFKChannel = guild.setAFKChannel;
    this.setMFALevel = guild.setMFALevel;
    this.setWidgetSettings = guild.setWidgetSettings;
    this.setPremiumProgressBarEnabled = guild.setPremiumProgressBarEnabled;
    this.setVerificationLevel = guild.setVerificationLevel;
    this.setSystemChannel = guild.setSystemChannel;
    this.setSystemChannelFlags = guild.setSystemChannelFlags;
    this.setSplash = guild.setSplash;
    this.setIcon = guild.setIcon;
    this.setRulesChannel = guild.setRulesChannel;
    this.setPublicUpdatesChannel = guild.setPublicUpdatesChannel;
    this.setPreferredLocale = guild.setPreferredLocale;
    this.setOwner = guild.setOwner;
    this.setName = guild.setName;
    this.setExplicitContentFilter = guild.setExplicitContentFilter;
    this.setDiscoverySplash = guild.setDiscoverySplash;
    this.setDefaultMessageNotifications = guild.setDefaultMessageNotifications;
    this.setBanner = guild.setBanner;
    this.setAFKTimeout = guild.setAFKTimeout;
    this.setWidgetSettings = guild.setWidgetSettings;
    this.fetchWidgetSettings = guild.fetchWidgetSettings;
    this.fetchWidget = guild.fetchWidget;
    this.fetchWelcomeScreen = guild.fetchWelcomeScreen;
    this.fetchWebhooks = guild.fetchWebhooks;
    this.fetchVanityData = guild.fetchVanityData;
    this.fetchTemplates = guild.fetchTemplates;
    this.fetchPreview = guild.fetchPreview;
    this.fetchOwner = guild.fetchOwner;
    this.fetchIntegrations = guild.fetchIntegrations;
    this.fetchAuditLogs = guild.fetchAuditLogs;
    this.equals = guild.equals;
    this.editWelcomeScreen = guild.editWelcomeScreen;
    this.edit = guild.edit;
    this.afkChannelId = guild.afkChannelId;
    this.afkTimeout = guild.afkTimeout;
    this.applicationId = guild.applicationId;
    this.approximateMemberCount = guild.approximateMemberCount;
    this.approximatePresenceCount = guild.approximatePresenceCount;
    this.available = guild.available;
    this.bans = guild.bans;
    this.channels = guild.channels;
    this.commands = guild.commands;
    this.defaultMessageNotifications = guild.defaultMessageNotifications;
    this.discoverySplash = guild.discoverySplash;
    this.emojis = guild.emojis;
    this.explicitContentFilter = guild.explicitContentFilter;
    this.invites = guild.invites;
    this.joinedTimestamp = guild.joinedTimestamp;
    this.large = guild.large;
    this.maximumMembers = guild.maximumMembers;
    this.maximumPresences = guild.maximumPresences;
    this.memberCount = guild.memberCount;
    this.members = guild.members;
    this.mfaLevel = guild.mfaLevel;
    this.ownerId = guild.ownerId;
    this.preferredLocale = guild.preferredLocale;
    this.premiumProgressBarEnabled = guild.premiumProgressBarEnabled;
    this.premiumTier = guild.premiumTier;
    this.presences = guild.presences;
    this.publicUpdatesChannelId = guild.publicUpdatesChannelId;
    this.roles = guild.roles;
    this.rulesChannelId = guild.rulesChannelId;
    this.scheduledEvents = guild.scheduledEvents;
    this.shardId = guild.shardId;
    this.stageInstances = guild.stageInstances;
    this.stickers = guild.stickers;
    this.systemChannelFlags = guild.systemChannelFlags;
    this.systemChannelId = guild.systemChannelId;
    this.vanityURLUses = guild.vanityURLUses;
    this.voiceStates = guild.voiceStates;
    this.widgetChannelId = guild.widgetChannelId;
    this.widgetEnabled = guild.widgetEnabled;
    this.id = guild.id;
    this.createTemplate = guild.createTemplate;
    this.delete = guild.delete;
    this.discoverySplashURL = guild.discoverySplashURL;
  }
  get afkChannel() {
    return this.discordGuild.afkChannel;
  }
  get maximumBitrate() {
    return this.discordGuild.maximumBitrate;
  }
  get widgetChannel() {
    return this.discordGuild.widgetChannel;
  }
  get joinedAt() {
    return this.discordGuild.joinedAt;
  }
  get voiceAdapterCreator() {
    return this.discordGuild.voiceAdapterCreator;
  }
  get systemChannel() {
    return this.discordGuild.systemChannel;
  }
  get shard() {
    return this.discordGuild.shard;
  }
  get rulesChannel() {
    return this.discordGuild.rulesChannel;
  }
  get publicUpdatesChannel() {
    return this.discordGuild.publicUpdatesChannel;
  }
  get serverStats() {
    return {};
  }
};
var guild_extentions_default = MooseGuild;

// src/extentions/messactions.extentions.ts
import { Collection as Collection2 } from "discord.js";
var MessActions2 = class {
  _message;
  _client;
  inputType;
  activity;
  applicationId;
  attachments;
  author;
  channelId;
  components;
  content;
  createdTimestamp;
  editedTimestamp;
  embeds;
  groupActivityApplication;
  guildId;
  id;
  interaction;
  mentions;
  nonce;
  pinned;
  reactions;
  stickers;
  system;
  tts;
  type;
  webhookId;
  flags;
  inGuild;
  constructor(message, client) {
    this._message = message;
    this._client = client;
    if (message.pin) {
      this.inputType = "message";
      message = message;
    } else {
      this.inputType = "interaction";
      message = message;
    }
    this.inGuild = message.inGuild();
    this.flags = message.flags ?? false;
    this.webhookId = message.webhookId ?? message.webhook.id;
    this.type = message.type;
    this.tts = message.tts ?? false;
    this.system = message.system ?? false;
    this.stickers = message.stickers ?? new Collection2();
    this.reactions = message.reactions ?? null;
    this.pinned = message.pinned ?? false;
    this.nonce = message.nonce ?? 1;
    this.mentions = message.mentions ?? this.checkMentions(message.options.data.toString());
    this.interaction = message.interaction ?? { id: message.id, type: message.type, commandName: message.commandName, user: message.user };
    this.id = message.id;
    this.guildId = message.guildId;
    this.groupActivityApplication = message.groupActivityApplication ?? null;
    this.embeds = message.embeds ?? [];
    this.editedTimestamp = message.editedTimestamp ?? message.createdTimestamp;
    this.createdTimestamp = message.createdTimestamp;
    this.activity = message.activity ?? null;
    this.content = message.content ?? "";
    this.components = message.components ?? [];
    this.channelId = message.channelId;
    this.author = message.author ?? message.user;
    this.attachments = message.attachments ?? new Collection2();
    this.applicationId = message.applicationId;
  }
  checkMentions(content) {
  }
  unpin(reason) {
    if (this.inputType === "interaction")
      return false;
    try {
      const unpin = this._message.unpin(reason);
      this._client.emit("messageUnpin", this);
      return unpin;
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  toString() {
    return this._message.toString();
  }
  toJSON() {
    this._message.toJSON();
  }
  suppressEmbeds(suppress) {
    if (this.inputType === "interaction")
      return false;
    return this._message.suppressEmbeds(suppress);
  }
  startThread(options) {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.startThread(options);
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  resolveComponent(customId) {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.resolveComponent(customId);
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  reply(options) {
    try {
      if (!options.body && typeof options !== "string") {
        options = { ...options };
      }
      return this._message.reply(options);
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  removeAttachments() {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.removeAttachments();
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  react(emoji) {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.react(emoji);
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  pin(reason) {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.pin(reason);
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  fetch(force) {
    if (this.inputType === "interaction")
      return this._message;
    try {
      return this._message.fetch(force);
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  crosspost() {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.crosspost();
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  fetchWebhook() {
    if (this.inputType === "interaction")
      return this._message.webhook;
    try {
      return this._message.fetchWebhook();
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  fetchReference() {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.fetchReference();
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  equals(message, rawData) {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.equals(message, rawData);
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  edit(content) {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.edit(content);
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  delete() {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.delete();
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  createMessageComponentCollector(options) {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.createMessageComponentCollector(options);
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  createReactionCollector(options) {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.createReactionCollector(options);
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  awaitReactions(options) {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.awaitReactions(options);
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  awaitMessageComponent(options) {
    if (this.inputType === "interaction")
      return false;
    try {
      return this._message.awaitMessageComponent(options);
    } catch (err) {
      this._client.emit("messageError", err, this);
      return false;
    }
  }
  get url() {
    if (this.inputType === "interaction")
      return void 0;
    return this._message.url;
  }
  get thread() {
    if (this.inputType === "interaction")
      return void 0;
    return this._message.thread;
  }
  get partial() {
    if (this.inputType === "interaction")
      return void 0;
    return this._message.partial;
  }
  get pinnable() {
    if (this.inputType === "interaction")
      return false;
    return this._message.pinnable;
  }
  get member() {
    return this._message.member;
  }
  get guild() {
    return this._message.guild;
  }
  get hasThread() {
    if (this.inputType === "interaction")
      return false;
    return this._message.hasThread;
  }
  get crosspostable() {
    if (this.inputType === "interaction")
      return false;
    return this._message.crosspostable;
  }
  get deletable() {
    if (this.inputType === "interaction")
      return false;
    return this._message.deletable;
  }
  get editable() {
    if (this.inputType === "interaction")
      return false;
    return this._message.editable;
  }
  get editedAt() {
    return this._message.editedAt ?? this._message.createdAt;
  }
  get createdAt() {
    return this._message.createdAt;
  }
  get cleanContent() {
    if (this.inputType === "interaction")
      return void 0;
    return this._message.cleanContent;
  }
  get channel() {
    return this._message.channel;
  }
  get reference() {
    return this.inputType === "interaction" ? {
      channelId: this._message.channelId,
      guildId: this._message.guildId,
      messageId: this._message.id
    } : this._message.reference;
  }
};
var messactions_extentions_default = MessActions2;

// src/client/commandHandler/commandBase.ts
import { SlashCommandBuilder } from "discord.js";

// src/client/commandHandler/enums.ts
import { SlashCommandAttachmentOption, SlashCommandBooleanOption, SlashCommandChannelOption, SlashCommandIntegerOption, SlashCommandMentionableOption, SlashCommandNumberOption, SlashCommandRoleOption, SlashCommandStringOption, SlashCommandSubcommandBuilder, SlashCommandSubcommandGroupBuilder, SlashCommandUserOption } from "discord.js";
var SlashCommandTypesEnum = /* @__PURE__ */ ((SlashCommandTypesEnum2) => {
  SlashCommandTypesEnum2["int"] = "addIntegerOption";
  SlashCommandTypesEnum2["number"] = "addNumberOption";
  SlashCommandTypesEnum2["float"] = "addNumberOption";
  SlashCommandTypesEnum2["double"] = "addNumberOption";
  SlashCommandTypesEnum2["integer"] = "addIntegerOption";
  SlashCommandTypesEnum2["string"] = "addStringOption";
  SlashCommandTypesEnum2["user"] = "addUserOption";
  SlashCommandTypesEnum2["boolean"] = "addBooleanOption";
  SlashCommandTypesEnum2["subcommand"] = "addSubcommand";
  SlashCommandTypesEnum2["subcommandgroup"] = "addSubcommandGroup";
  SlashCommandTypesEnum2["channel"] = "addChannelOption";
  SlashCommandTypesEnum2["mentionable"] = "addMentionableOption";
  SlashCommandTypesEnum2["role"] = "addRoleOption";
  SlashCommandTypesEnum2["attachment"] = "addAttachmentOption";
  return SlashCommandTypesEnum2;
})(SlashCommandTypesEnum || {});
var SlashCommandOptionClassesEnum = {
  "int": SlashCommandIntegerOption,
  "number": SlashCommandNumberOption,
  "float": SlashCommandNumberOption,
  "double": SlashCommandNumberOption,
  "integer": SlashCommandIntegerOption,
  "string": SlashCommandStringOption,
  "user": SlashCommandUserOption,
  "boolean": SlashCommandBooleanOption,
  "subcommand": SlashCommandSubcommandBuilder,
  "subcommandgroup": SlashCommandSubcommandGroupBuilder,
  "channel": SlashCommandChannelOption,
  "mentionable": SlashCommandMentionableOption,
  "role": SlashCommandRoleOption,
  "attachment": SlashCommandAttachmentOption
};
new SlashCommandOptionClassesEnum.string().addChoices;

// src/client/commandHandler/commandBase.ts
var CommandBase = class {
  client;
  name;
  description;
  aliases;
  ephemeral;
  privateCommand;
  nsfw;
  dm;
  dmOnly;
  dft;
  unknown;
  hidden;
  ownerOnly;
  regex;
  guarded;
  channel;
  channelOnly;
  argStyle;
  cacheResults;
  schema;
  maxArgs;
  minArgs;
  rest;
  namedArgs;
  adminOnly;
  modOnly;
  _whiteListedRoles;
  _blacklistedRoles;
  _blacklistedUsers;
  _whitelistedUsers;
  _blacklistedGuilds;
  _whitelistedGuilds;
  _blacklistedChannels;
  _whitelistedChannels;
  serverTimeLimit;
  userTimeLimit;
  allowExtraArgs;
  interaction;
  argSplitter;
  args;
  lastRunBy;
  autoaliases;
  _apiFormat;
  nsfwOnly;
  capsSensitive;
  testOnly;
  slash;
  slashCommand;
  nameLocalizations;
  slashFunction;
  _cache = /* @__PURE__ */ new Map();
  constructor(options) {
    this.name = options.name.toString();
    this.description = options.description.toString();
    const {
      aliases = [],
      ephemeral,
      privateCommand,
      nsfw = false,
      dm,
      dmOnly,
      dft,
      unknown,
      hidden = settings_default.command.defaultHidden,
      ownerOnly = settings_default.command.defaultOwnerOnly,
      regex,
      guarded = settings_default.command.defaultGuarded,
      channel,
      channelOnly,
      argStyle = settings_default.command.defaultArgStyle,
      cacheResults = settings_default.command.defaultCacheResult,
      schema = [],
      maxArgs,
      minArgs = 0,
      rest = settings_default.command.defaultRest,
      namedArgs,
      adminOnly = settings_default.command.defaultAdminOnly,
      modOnly = settings_default.command.defaultModOnly,
      whiteListedRoles = [],
      blacklistedRoles = [],
      whitelistedChannels = [],
      blacklistedChannels = [],
      whitelistedGuilds = [],
      blacklistedGuilds = [],
      whitelistedUsers = [],
      blacklistedUsers = [],
      serverTimeLimit,
      userTimeLimit,
      allowExtraArgs = settings_default.command.defaultAllowExtraArgs,
      interaction = settings_default.command.defaultInteractions,
      argSplitter = settings_default.command.defaultArgSplitter,
      args = [],
      lastRunBy = settings_default.command.defaultLastRunBy,
      autoaliases = settings_default.command.defaultAutoAlias,
      format,
      nsfwOnly = settings_default.command.defaultNSFWOnly,
      capsSensitive = settings_default.command.defaultCapsSensitive,
      testOnly = settings_default.command.defaultTestOnly,
      slash,
      slashCommand,
      nameLocalizations,
      slashFunction
    } = options;
    this.aliases = [...aliases];
    this.ephemeral = typeof ephemeral === "undefined" ? privateCommand ?? settings_default.command.defaultEphemeral : ephemeral;
    this.privateCommand = this.ephemeral;
    this.nsfw = nsfw;
    this.dm = typeof dm === "undefined" ? dmOnly ?? settings_default.command.dmOnlyDefault : dm;
    this.dmOnly = this.dm;
    this.dft = typeof dft === "undefined" ? unknown ?? false : dft;
    this.unknown = this.dft;
    this.hidden = hidden;
    this.ownerOnly = ownerOnly;
    this.regex = regex;
    this.guarded = guarded;
    this.channel = typeof channel === "undefined" ? channelOnly ?? settings_default.command.defaultChannelOnly : channel;
    this.channelOnly = this.channel;
    this.argStyle = this._verifyArgStyle(argStyle);
    this.cacheResults = cacheResults;
    this.schema = Array.isArray(schema) ? schema : [schema];
    this.maxArgs = maxArgs;
    this.minArgs = minArgs;
    this.rest = rest;
    this.namedArgs = namedArgs;
    this.adminOnly = adminOnly;
    this.modOnly = modOnly;
    this._whiteListedRoles = whiteListedRoles;
    this._blacklistedRoles = blacklistedRoles;
    this._whitelistedChannels = whitelistedChannels;
    this._blacklistedChannels = blacklistedChannels;
    this._whitelistedGuilds = whitelistedGuilds;
    this._blacklistedGuilds = blacklistedGuilds;
    this._whitelistedUsers = whitelistedUsers;
    this._blacklistedUsers = blacklistedUsers;
    this.serverTimeLimit = serverTimeLimit;
    this.userTimeLimit = userTimeLimit;
    this.allowExtraArgs = allowExtraArgs;
    this.interaction = interaction;
    this.argSplitter = argSplitter;
    this.args = Array.isArray(args) ? args : [args];
    this.lastRunBy = lastRunBy;
    this.autoaliases = autoaliases;
    this._apiFormat = this._createSlashData(format);
    this.nsfwOnly = nsfwOnly;
    this.capsSensitive = capsSensitive;
    this.testOnly = testOnly;
    this.slash = typeof slash === "undefined" ? slashCommand ?? settings_default.command.defaultSlash : slash;
    this.slashCommand = this.slash;
    this.nameLocalizations = nameLocalizations;
    this.slashFunction = slashFunction;
    if (this.autoaliases)
      this._autoAlias();
  }
  async run(args) {
    throw new Error("No Run Method Defined");
  }
  async interactionRun(args) {
    throw new Error("No Interaction Run Method Defined");
  }
  _verifyArgStyle(argStyle) {
    argStyle = argStyle.toLowerCase().trim();
    if (settings_default.command.argStyleArray.includes(argStyle))
      return argStyle;
    return "string";
  }
  get blacklistedChannels() {
    return this._blacklistedChannels;
  }
  get whitelistedChannels() {
    return this._whitelistedChannels;
  }
  get blacklistedGuilds() {
    return this._blacklistedGuilds;
  }
  get whitelistedGuilds() {
    return this._whitelistedGuilds;
  }
  get blacklistedRoles() {
    return this._blacklistedRoles;
  }
  get blacklistedUsers() {
    return this._blacklistedUsers;
  }
  get whitelistedUsers() {
    return this._whitelistedUsers;
  }
  get whiteListedRoles() {
    return this._whiteListedRoles;
  }
  get getApiCommandFormat() {
    return this._apiFormat;
  }
  initCommand(client) {
    if (this.client)
      return console.warn(`The ${this.name} command was initated twice`);
    this.client = client;
    return true;
  }
  _autoAlias() {
    const aliases = [];
    aliases.push(__filename);
    aliases.push(this.name.toUpperCase(), this.name.toUpperCase().replace(/\W/gi, ""), this.name.toLowerCase(), this.name.toLowerCase().replace(/\W/gi, ""));
    if (Array.isArray(this.name.match(/\W/g))) {
      aliases.push(convertToCamelCase(this.name.split(/\W/g)));
    }
    this.aliases.push(...aliases);
  }
  _createSlashData(format) {
    let newFormat;
    if (typeof format === "undefined") {
      const temp = [];
      this.args.forEach((arg) => {
        temp.push(arg);
      });
      newFormat = [];
    } else if (!Array.isArray(format)) {
      newFormat = [format];
    } else
      newFormat = format;
    return this._createFormatClasses(newFormat).toJSON();
  }
  get slashData() {
    return;
  }
  _createFormatClasses(format, builder = new SlashCommandBuilder()) {
    if (typeof format === "function")
      return format(builder);
    builder.setName(this.name);
    builder.setDescription(this.description);
    format.forEach((form) => {
      if (typeof builder[SlashCommandTypesEnum[form.type]] !== "function") {
        throw new SyntaxError(`Type ${form.type} is not a valid type`);
      }
      builder[SlashCommandTypesEnum[form.type]]((option) => {
        if (typeof option.setRequired === "function") {
          option.setRequired(form.required !== false ? true : false);
        }
        if (typeof option.setMinValue === "function" && typeof form.minVal === "number")
          option.setMinValue(form.minVal);
        if (typeof option.setMaxValue === "function" && typeof form.maxVal === "number")
          option.setMaxValue(form.maxVal);
        if (typeof form.nameLocalization === "object" && !Array.isArray(form.nameLocalization)) {
          option.setNameLocalization(form.nameLocalization.locale, form.nameLocalization.name);
        } else if (typeof form.nameLocalizations === "object" && !Array.isArray(form.nameLocalizations)) {
          option.setNameLocalizations(form.nameLocalizations);
        } else
          option.setName(form.name);
        if (typeof form.descriptionLocalization === "object" && !Array.isArray(form.nameLocalization)) {
          option.setDescriptionLocalization(form.descriptionLocalization.locale, form.descriptionLocalization.name);
        } else if (typeof form.nameLocalizations === "object" && !Array.isArray(form.nameLocalizations)) {
          option.setDescriptionLocalizations(form.descriptionLocalizations);
        } else
          option.setDescription(form.name);
        if (typeof option.setAutocomplete === "function") {
          option.setAutocomplete(form.autocomplete ?? true);
        }
        if (typeof option[SlashCommandTypesEnum[form.type]] !== "function")
          throw new SyntaxError(`${form.type} is not a valid type`);
        if (typeof option.addChoices && form.choices) {
          option.addChoices(form.choices);
        }
      });
    });
    return builder;
  }
  cacheManager() {
    this.client;
  }
};
var commandBase_default = CommandBase;

// src/extentions/channel.extention.ts
import { DMChannel, PartialGroupDMChannel } from "discord.js";
var MooseChannel = class {
  channel;
  client;
  guild;
  guildId;
  createdAt;
  createdTimestamp;
  id;
  partial;
  url;
  _cache = new cache_default.MicroCache();
  constructor(client, channel) {
    this.channel = channel;
    this.client = client;
    this.createdAt = channel.createdAt;
    this.createdTimestamp = channel.createdTimestamp;
    this.id = channel.id;
    this.partial = channel.partial;
    this.url = channel.url;
    if (!(channel instanceof DMChannel || channel instanceof PartialGroupDMChannel)) {
      this.guild = new guild_extentions_default(client, channel.guild);
      this.guild.id;
    }
  }
  get deleteable() {
    return this.channel.deletable;
  }
  get flags() {
    return this.channel.flags;
  }
  get lastMessage() {
    throw new Error("Change to return moosemessage");
    return this.channel.lastMessage;
  }
  get lastMessageId() {
    return this.channel.lastMessageId;
  }
  get lastPinAt() {
    return this.channel.lastPinAt;
  }
  get lastPinTimestamp() {
    return this.channel.lastPinTimestamp;
  }
  get manageable() {
    return this.channel.manageable;
  }
  get members() {
    return this.channel.members;
  }
  get messages() {
    return this.channel.messages;
  }
  get name() {
    return this.channel.name;
  }
  get nsfw() {
    return this.channel.nsfw;
  }
  get defaultAutoArchiveDuration() {
    return this.channel.defaultAutoArchiveDuration;
  }
  get permissionsOverwrite() {
    return this.channel.permissionOverwrites;
  }
  get permissionsLocked() {
    return this.channel.permissionsLocked;
  }
  get position() {
    return this.channel.position;
  }
  get rateLimitPerUser() {
    return this.channel.rateLimitPerUser;
  }
  get rawPosition() {
    return this.channel.rawPosition;
  }
  get threads() {
    return this.channel.threads;
  }
  get topic() {
    return this.channel.topic;
  }
  get type() {
    return this.channel.type;
  }
  get viewable() {
    return this.channel.viewable;
  }
  async delete(reason) {
    return await this.channel.delete(reason);
  }
  async fetch(force) {
    return await this.channel.fetch(force);
  }
  isDMBased() {
    return this._cache.cacheResults("isDMBased", this.channel.isDMBased, {});
  }
  isTextBased() {
    return this._cache.cacheResults("isTextBased", this.channel.isTextBased, {});
  }
  isThread() {
    return this._cache.cacheResults("isThread", this.channel.isThread, {});
  }
  isVoiceBased() {
    return this._cache.cacheResults("isVoiceBased", this.channel.isVoiceBased, {});
  }
  async awaitMessageComponent(options) {
    if (typeof this.channel.awaitMessageComponent !== "function")
      return void 0;
    return await this.channel.awaitMessageComponent(options);
  }
  async awaitMessages(options) {
    if (typeof this.channel.awaitMessages !== "function")
      return void 0;
    return await this.channel.awaitMessages(options);
  }
  async bulkDelete(messages, filterOld = false) {
    return await this.bulkDelete(messages, filterOld);
  }
  async clone(options) {
    if (typeof this.channel.clone !== "function")
      return void 0;
    return await this.channel.clone(options);
  }
  async createInvite(options) {
    if (typeof this.channel.createInvite !== "function")
      return void 0;
    return await this.channel.createInvite(options);
  }
  createMessageCollector(options) {
    if (typeof this.channel.createMessageCollector !== "function")
      return void 0;
    return this.channel.createMessageCollector(options);
  }
  createMessageComponentCollector(options) {
    if (typeof this.channel.createMessageComponentCollector !== "function")
      return void 0;
    return this.channel.createMessageComponentCollector(options);
  }
  async createWebhook(options) {
    if (typeof this.channel.createWebhook !== "function")
      return void 0;
    return await this.channel.createWebhook(options);
  }
  async fetchInvites(cache = true) {
    if (typeof this.channel.fetchInvites !== "function")
      return void 0;
    return await this.channel.fetchInvites(cache);
  }
  async fetchWebhooks() {
    if (typeof this.channel.fetchWebhooks !== "function")
      return void 0;
    return await this.channel.fetchWebhooks();
  }
  async send(options) {
    if (typeof this.channel.send !== "function")
      return void 0;
    return await this.channel.send(options);
  }
  async sendTyping() {
    if (typeof this.channel.sendTyping !== "function")
      return void 0;
    return await this.channel.sendTyping();
  }
  async setName(name, reason) {
    if (typeof this.channel.setName !== "function")
      return void 0;
    return new MooseChannel(this.client, await this.channel.setName(name, reason));
  }
  async setNFSW(nsfw = true, reason) {
    if (typeof this.channel.setNSFW !== "function")
      return void 0;
    await this.channel.setNSFW(nsfw, reason);
    return this;
  }
  async setParent(channel, options) {
    if (typeof this.channel.setParent !== "function")
      return void 0;
    await this.channel.setParent(channel, options);
    return this;
  }
  async setPosition(position, options) {
    if (typeof this.channel.setPosition !== "function")
      return void 0;
    await this.channel.setPosition(position, options);
    return this;
  }
  async setRateLimitPerUser(rateLimitPerUser, reason) {
    if (typeof this.channel.setRateLimitPerUser !== "function")
      return void 0;
    await this.channel.setRateLimitPerUser(rateLimitPerUser, reason);
    return this;
  }
  async setSlowMode(ms, reason) {
    if (typeof this.channel.setRateLimitPerUser !== "function")
      return void 0;
    await this.channel.setRateLimitPerUser(ms, reason);
    return this;
  }
  async setTopic(topic, reason) {
    if (typeof this.channel.setTopic !== "function")
      return void 0;
    await this.channel.setTopic(topic, reason);
    return this;
  }
  async setType(type, reason) {
    if (typeof this.channel.setType !== "function")
      return void 0;
    await this.channel.setType(type, reason);
    return this;
  }
  toString() {
    return this.channel.toString();
  }
};
var channel_extention_default = MooseChannel;

// src/index.ts
var MooseUser = class {
};
var MooseMember = class {
};
var MooseRole2 = class {
};
var MooseCache2 = class {
};
var src_default = client_default;
export {
  commandBase_default as CommandBase,
  messactions_extentions_default as MessActions,
  MooseCache2 as MooseCache,
  channel_extention_default as MooseChannel,
  MooseError,
  guild_extentions_default as MooseGuild,
  MooseMember,
  MooseRole2 as MooseRole,
  MooseUser,
  src_default as default
};
