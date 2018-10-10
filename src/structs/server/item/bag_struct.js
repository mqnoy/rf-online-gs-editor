import Struct from '../../../classes/Struct';

export default new Struct().fromSchema1([
  { child: { type: Number, name: 'nIndex', len: 32 } },
  { child: { type: String, name: 'strCode', len: 64 } },
  { child: { type: Boolean, name: 'bExist', len: 32 } },
  { child: { type: String, name: 'strModel', len: 64 } },
  { child: { type: Number, name: 'nIconIDX', len: 32 } },
  { child: { type: String, name: 'strName', len: 64 } },
  { child: { type: Number, name: 'nKindClt', len: 32 } },
  { child: { type: Number, name: 'nFixPart', len: 32 } },
  { child: { type: String, name: 'strCivil', len: 64 } },
  { child: { type: Number, name: 'nMoney', len: 32 } },
  { child: { type: Number, name: 'nStdPrice', len: 32 } },
  { child: { type: Number, name: 'nStdPoint', len: 32 } },
  { child: { type: Number, name: 'nGoldPoint', len: 32 } },
  { child: { type: Number, name: 'nKillPoint', len: 32 } },
  { child: { type: Number, name: 'nProcPoint', len: 32 } },
  { child: { type: Number, name: 'nStoragePrice', len: 32 } },
  { child: { type: Boolean, name: 'bSell', len: 32 } },
  { child: { type: Boolean, name: 'bExchange', len: 32 } },
  { child: { type: Boolean, name: 'bGround', len: 32 } },
  { child: { type: Boolean, name: 'bStoragePossible', len: 32 } },
  { child: { type: Boolean, name: 'bUseableNormalAcc', len: 32 } },
  { child: { type: String, name: 'strTooltipIndex', len: 64 } },
  { child: { type: Boolean, name: 'bIsTime', len: 32 } },
]);
