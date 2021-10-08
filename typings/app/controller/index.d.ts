// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBill = require('../../../app/controller/bill');
import ExportHome = require('../../../app/controller/home');
import ExportNote = require('../../../app/controller/note');
import ExportType = require('../../../app/controller/type');
import ExportUpload = require('../../../app/controller/upload');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    bill: ExportBill;
    home: ExportHome;
    note: ExportNote;
    type: ExportType;
    upload: ExportUpload;
    user: ExportUser;
  }
}
