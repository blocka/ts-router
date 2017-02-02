"use strict";

const util_1 = require('./util');
/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts"/>
require('reflect-metadata');
function Before(target, key) {
    target.__routes = target.__routes || {};
    target.__routes[key] = target.__routes[key] || {};
    target.__routes[key].filter = 'before';
}
exports.Before = Before;
function After(target, key) {
    target.__routes = target.__routes || {};
    target.__routes[key] = target.__routes[key] || {};
    target.__routes[key].filter = 'after';
}
exports.After = After;
function GET(target, key) {
    target.__routes = target.__routes || {};
    target.__routes[key] = target.__routes[key] || {};
    target.__routes[key].method = 'GET';
}
exports.GET = GET;
function POST(target, key) {
    target.__routes = target.__routes || {};
    target.__routes[key] = target.__routes[key] || {};
    target.__routes[key].method = 'POST';
}
exports.POST = POST;
function PUT(target, key) {
    target.__routes = target.__routes || {};
    target.__routes[key] = target.__routes[key] || {};
    target.__routes[key].method = 'PUT';
}
exports.PUT = PUT;
function DELETE(target, key) {
    target.__routes = target.__routes || {};
    target.__routes[key] = target.__routes[key] || {};
    target.__routes[key].method = 'DELETE';
}
exports.DELETE = DELETE;
function Path(path) {
    return (target, key) => {
        if (key) {
            let type = Reflect.getMetadata(util_1.ReflectType.PARAMETER_TYPE, target, key);
            target.__routes = target.__routes || {};
            target.__routes[key] = target.__routes[key] || {};
            target.__routes[key].path = target.__routes[key].path || [];
            target.__routes[key].path.push(path);
        } else {
            Object.defineProperty(target.prototype, '__path', {
                value: path
            });
        }
    };
}
exports.Path = Path;
function Produce(type) {
    return (target, key) => {
        target.__routes = target.__routes || {};
        target.__routes[key] = target.__routes[key] || {};
        target.__routes[key].produce = type;
    };
}
exports.Produce = Produce;
function Consume(type) {
    return (target, key) => {
        target.__routes = target.__routes || {};
        target.__routes[key] = target.__routes[key] || {};
        target.__routes[key].consume = type;
    };
}
exports.Consume = Consume;
function QueryParam(param) {
    return (target, key, index) => {
        if (index !== undefined) {
            let type = Reflect.getMetadata(util_1.ReflectType.PARAMETER_TYPE, target, key)[index];
            target.__routes = target.__routes || {};
            target.__routes[key] = target.__routes[key] || {};
            target.__routes[key].parameters = target.__routes[key].parameters || [];
            target.__routes[key].parameters[index] = {
                index: index,
                type: type,
                key: param,
                paramType: 'query-param'
            };
        } else {
            target.__properties = target.__properties || {};
            target.__properties[key] = {
                key: param,
                type: Reflect.getMetadata(util_1.ReflectType.TYPE, target, key),
                paramType: 'query-param'
            };
        }
    };
}
exports.QueryParam = QueryParam;
function PathParam(param) {
    return (target, key, index) => {
        if (index !== undefined) {
            let type = Reflect.getMetadata(util_1.ReflectType.PARAMETER_TYPE, target, key)[index];
            target.__routes = target.__routes || {};
            target.__routes[key] = target.__routes[key] || {};
            target.__routes[key].parameters = target.__routes[key].parameters || [];
            target.__routes[key].parameters[index] = {
                index: index,
                type: type,
                key: param,
                paramType: 'path-param'
            };
        } else {
            target.__properties = target.__properties || {};
            target.__properties[key] = {
                key: param,
                type: Reflect.getMetadata(util_1.ReflectType.TYPE, target, key),
                paramType: 'path-param'
            };
        }
    };
}
exports.PathParam = PathParam;
function BodyParam(param) {
    return (target, key, index) => {
        if (index !== undefined) {
            let type = Reflect.getMetadata(util_1.ReflectType.PARAMETER_TYPE, target, key)[index];
            target.__routes = target.__routes || {};
            target.__routes[key] = target.__routes[key] || {};
            target.__routes[key].parameters = target.__routes[key].parameters || [];
            target.__routes[key].parameters[index] = {
                index: index,
                type: type,
                key: param,
                paramType: 'body-param'
            };
        } else {
            target.__properties = target.__properties || {};
            target.__properties[key] = {
                key: param,
                type: Reflect.getMetadata(util_1.ReflectType.TYPE, target, key),
                paramType: 'body-param'
            };
        }
    };
}
exports.BodyParam = BodyParam;
function HeaderParam(param) {
    return (target, key, index) => {
        if (index !== undefined) {
            let type = Reflect.getMetadata(util_1.ReflectType.PARAMETER_TYPE, target, key)[index];
            target.__routes = target.__routes || {};
            target.__routes[key] = target.__routes[key] || {};
            target.__routes[key].parameters = target.__routes[key].parameters || [];
            target.__routes[key].parameters[index] = {
                index: index,
                type: type,
                key: param,
                paramType: 'header-param'
            };
        } else {
            target.__properties = target.__properties || {};
            target.__properties[key] = {
                key: param,
                type: Reflect.getMetadata(util_1.ReflectType.TYPE, target, key),
                paramType: 'header-param'
            };
        }
    };
}
exports.HeaderParam = HeaderParam;
function Query(target, key, index) {
    if (index !== undefined) {
        let type = Reflect.getMetadata(util_1.ReflectType.PARAMETER_TYPE, target, key)[index];
        target.__routes = target.__routes || {};
        target.__routes[key] = target.__routes[key] || {};
        target.__routes[key].parameters = target.__routes[key].parameters || [];
        target.__routes[key].parameters[index] = {
            index: index,
            type: type,
            key: '',
            paramType: 'query'
        };
    } else {
        target.__properties = target.__properties || {};
        target.__properties[key] = {
            key: '',
            type: Reflect.getMetadata(util_1.ReflectType.TYPE, target, key),
            paramType: 'query'
        };
    }
}
exports.Query = Query;
function Params(target, key, index) {
    if (index !== undefined) {
        let type = Reflect.getMetadata(util_1.ReflectType.PARAMETER_TYPE, target, key)[index];
        target.__routes = target.__routes || {};
        target.__routes[key] = target.__routes[key] || {};
        target.__routes[key].parameters = target.__routes[key].parameters || [];
        target.__routes[key].parameters[index] = {
            index: index,
            type: type,
            key: '',
            paramType: 'params'
        };
    } else {
        target.__properties = target.__properties || {};
        target.__properties[key] = {
            key: '',
            type: Reflect.getMetadata(util_1.ReflectType.TYPE, target, key),
            paramType: 'params'
        };
    }
}
exports.Params = Params;
function Body(target, key, index) {
    if (index !== undefined) {
        let type = Reflect.getMetadata(util_1.ReflectType.PARAMETER_TYPE, target, key)[index];
        target.__routes = target.__routes || {};
        target.__routes[key] = target.__routes[key] || {};
        target.__routes[key].parameters = target.__routes[key].parameters || [];
        target.__routes[key].parameters[index] = {
            index: index,
            type: type,
            key: '',
            paramType: 'body'
        };
    } else {
        target.__properties = target.__properties || {};
        target.__properties[key] = {
            key: '',
            type: Reflect.getMetadata(util_1.ReflectType.TYPE, target, key),
            paramType: 'body'
        };
    }
}
exports.Body = Body;
function Headers(target, key, index) {
    if (index !== undefined) {
        let type = Reflect.getMetadata(util_1.ReflectType.PARAMETER_TYPE, target, key)[index];
        target.__routes = target.__routes || {};
        target.__routes[key] = target.__routes[key] || {};
        target.__routes[key].parameters = target.__routes[key].parameters || [];
        target.__routes[key].parameters[index] = {
            index: index,
            type: type,
            key: '',
            paramType: 'headers'
        };
    } else {
        target.__properties = target.__properties || {};
        target.__properties[key] = {
            key: '',
            type: Reflect.getMetadata(util_1.ReflectType.TYPE, target, key),
            paramType: 'headers'
        };
    }
}
exports.Headers = Headers;
function AppContext(target, key, index) {
    if (index !== undefined) {
        let type = Reflect.getMetadata(util_1.ReflectType.PARAMETER_TYPE, target, key)[index];
        target.__routes = target.__routes || {};
        target.__routes[key] = target.__routes[key] || {};
        target.__routes[key].parameters = target.__routes[key].parameters || [];
        target.__routes[key].parameters[index] = {
            index: index,
            type: type,
            key: '',
            paramType: 'app-context'
        };
    } else {
        target.__properties = target.__properties || {};
        target.__properties[key] = {
            key: '',
            type: Reflect.getMetadata(util_1.ReflectType.TYPE, target, key),
            paramType: 'app-context'
        };
    }
}
exports.AppContext = AppContext;
function HttpContext(target, key, index) {
    if (index !== undefined) {
        let type = Reflect.getMetadata(util_1.ReflectType.PARAMETER_TYPE, target, key)[index];
        target.__routes = target.__routes || {};
        target.__routes[key] = target.__routes[key] || {};
        target.__routes[key].parameters = target.__routes[key].parameters || [];
        target.__routes[key].parameters[index] = {
            index: index,
            type: type,
            key: '',
            paramType: 'http-context'
        };
    } else {
        target.__properties = target.__properties || {};
        target.__properties[key] = {
            key: '',
            type: Reflect.getMetadata(util_1.ReflectType.TYPE, target, key),
            paramType: 'http-context'
        };
    }
}
exports.HttpContext = HttpContext;
function RouteResponse(target, key, index) {
    let type = Reflect.getMetadata(util_1.ReflectType.PARAMETER_TYPE, target, key)[index];
    target.__routes = target.__routes || {};
    target.__routes[key] = target.__routes[key] || {};
    target.__routes[key].parameters = target.__routes[key].parameters || [];
    target.__routes[key].parameters[index] = {
        index: index,
        type: type,
        key: '',
        paramType: 'response'
    };
}
exports.RouteResponse = RouteResponse;