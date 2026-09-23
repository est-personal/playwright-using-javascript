const { expect } = require('@playwright/test');

const getPermissionName = (label)  => {
    return `perm_${label.toLowerCase().replace(/\s+/g, '_')}`;
};

module.exports = {
    getPermissionName
};