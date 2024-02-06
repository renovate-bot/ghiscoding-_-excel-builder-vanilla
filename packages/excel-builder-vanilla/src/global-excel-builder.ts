import { Drawing } from './Excel/Drawing/Drawing';
import { Drawings } from './Excel/Drawings';
import { Pane } from './Excel/Pane';
import { Paths } from './Excel/Paths';
import { Positioning } from './Excel/Positioning';
import { RelationshipManager } from './Excel/RelationshipManager';
import { SharedStrings } from './Excel/SharedStrings';
import { SheetView } from './Excel/SheetView';
import { StyleSheet } from './Excel/StyleSheet';
import { Table } from './Excel/Table';
import { Util } from './Excel/Util';
import { Workbook } from './Excel/Workbook';
import { Worksheet } from './Excel/Worksheet';
import { XMLDOM } from './Excel/XMLDOM';
import { Template } from './Template';
import { ExcelBuilder as Builder } from './excel-builder';

try {
  if (typeof window !== 'undefined') {
    window.ExcelBuilder = {
      Drawings,
      Drawing,
      Pane,
      Paths,
      Positioning,
      RelationshipManager,
      SharedStrings,
      SheetView,
      StyleSheet,
      Table,
      Util,
      Workbook,
      Worksheet,
      XMLDOM,
      Builder,
      Template,
    };
  }
} catch (e) {
  // Silently ignore?
  console.info('Not attaching EB to window');
}
