import * as ITEM_TYPES from '../../item_types';
import defaultHeader from './default_header';
import upperDescrHeader from './upper_descr_header';
import struct from './struct';
import descrStruct from './descr_struct';
import textdataDescrHeader from './textdata_descr_header';

const readerStruct = [
  ...[
    ITEM_TYPES.FACE,
    ITEM_TYPES.UPPER,
    ITEM_TYPES.LOWER,
    ITEM_TYPES.GAUNTLET,
    ITEM_TYPES.SHOE,
    ITEM_TYPES.HELMET,
    ITEM_TYPES.WEAPON,
    ITEM_TYPES.SHIELD,
    ITEM_TYPES.CLOAK,
    ITEM_TYPES.RING,
    ITEM_TYPES.AMULET,
    ITEM_TYPES.BULLET,
    ITEM_TYPES.MAKETOOL,
    ITEM_TYPES.POTION,
    ITEM_TYPES.BAG,
    ITEM_TYPES.BATTERY,
    ITEM_TYPES.ORE,
    ITEM_TYPES.RESOURCE,
    ITEM_TYPES.FORCE,
    ITEM_TYPES.UNITKEY,
    ITEM_TYPES.BOOTY,
    ITEM_TYPES.MAP,
    ITEM_TYPES.TOWN,
    ITEM_TYPES.DUNGEONKEY,
    ITEM_TYPES.ANIMUS,
    ITEM_TYPES.TOWER,
    ITEM_TYPES.TRAP,
    ITEM_TYPES.SIEGEKIT,
    ITEM_TYPES.TICKET,
    ITEM_TYPES.QUEST,
    ITEM_TYPES.RECOVERY,
    ITEM_TYPES.BOX,
    ITEM_TYPES.FIRECRACKER,
    ITEM_TYPES.CASHMINING,
    ITEM_TYPES.RADAR,
    ITEM_TYPES.PAGER,
    ITEM_TYPES.COUPON,
    ITEM_TYPES.MAUHEAD,
    ITEM_TYPES.MAUUPPER,
    ITEM_TYPES.MAULOWER,
    ITEM_TYPES.MAUARM,
    ITEM_TYPES.MAUSHOULDER,
    ITEM_TYPES.MAUBACK,
    ITEM_TYPES.MAUBULLET,
  ].map(type => ({
    type,
    header: defaultHeader,
    block: struct,
  })),
  {
    type: [ITEM_TYPES.UPPER, 'description'].join('_'),
    header: upperDescrHeader,
    block: descrStruct,
  },
  ...[
    ITEM_TYPES.LOWER,
    ITEM_TYPES.GAUNTLET,
    ITEM_TYPES.SHOE,
    ITEM_TYPES.HELMET,
    ITEM_TYPES.WEAPON,
    ITEM_TYPES.SHIELD,
    ITEM_TYPES.CLOAK,
    ITEM_TYPES.RING,
    ITEM_TYPES.AMULET,
    ITEM_TYPES.BULLET,
    ITEM_TYPES.MAKETOOL,
    ITEM_TYPES.POTION,
    ITEM_TYPES.BAG,
    ITEM_TYPES.BATTERY,
    ITEM_TYPES.ORE,
    ITEM_TYPES.RESOURCE,
    ITEM_TYPES.FORCE,
    ITEM_TYPES.UNITKEY,
    ITEM_TYPES.BOOTY,
    ITEM_TYPES.MAP,
    ITEM_TYPES.TOWN,
    ITEM_TYPES.DUNGEONKEY,
    ITEM_TYPES.ANIMUS,
    ITEM_TYPES.TOWER,
    ITEM_TYPES.TRAP,
    ITEM_TYPES.SIEGEKIT,
    ITEM_TYPES.TICKET,
    ITEM_TYPES.QUEST,
    ITEM_TYPES.RECOVERY,
    ITEM_TYPES.BOX,
    ITEM_TYPES.FIRECRACKER,
    [
      ITEM_TYPES.MAUHEAD,
      ITEM_TYPES.MAUUPPER,
      ITEM_TYPES.MAULOWER,
      ITEM_TYPES.MAUARM,
      ITEM_TYPES.MAUSHOULDER,
      ITEM_TYPES.MAUBACK,
      ITEM_TYPES.MAUBULLET,
      ITEM_TYPES.CASHMINING,
    ].join(':'),
    ITEM_TYPES.RADAR,
    ITEM_TYPES.PAGER,
    ITEM_TYPES.COUPON,
  ].map(type => ({
    type: [type, 'description'].join('_'),
    header: defaultHeader,
    block: descrStruct,
  })),
  {
    type: 'textdata_description',
    header: textdataDescrHeader,
    block: descrStruct,
  },
];

export default readerStruct;