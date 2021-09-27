export const FACTORY_ADDRESS = '0x21bf88d5753f971ADD459b33504cb1B62c2D2719'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0x43217921bbb04fabc8c743fa538c897486d663f86b31754003da0ae10967a0bc'
export const POOL_INIT_CODE_HASH_OPTIMISM = '0x0c231002d0970d2126e7e00ce88c3b0e5ec8e48dac71478d56245c34ea2f9447'

// historical artifact due to small compiler mismatch
export const POOL_INIT_CODE_HASH_OPTIMISM_KOVAN = '0x1fc830513acbdb1608b8c18fd3cf4a4bee3329c69bb41d56400401c40fe02fd0'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  // LOW = 500,
  LOW = 300,
  MEDIUM = 3000,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  // [FeeAmount.LOW]: 10,
  [FeeAmount.LOW]: 6,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
