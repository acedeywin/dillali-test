const entries = ["Entry1", "Entry2", "Entry3", "Entry4", "Entry5"]

export const modes = ["app", "admin"]

export const items = entries.reduce(
  (items: any, entry: any) => [
    ...items,
    {
      name: `${entry}`,
    },
  ],
  []
)
