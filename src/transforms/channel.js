// @ts-check

import { cc, note } from '../hydra-api'

export const channel = (channel, input = null) => ({
  note: (_note, _channel, _input) => note(_note, channel, input ?? _input),
  cc: (_index, _channel, _input) => cc(_index, channel, input ?? _input)
})