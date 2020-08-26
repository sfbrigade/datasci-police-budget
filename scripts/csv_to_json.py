import pandas as pd
import json

df = pd.read_csv (r'~/Development/datasci-police-budget/documents/SF_spending_organization_groups.csv')
df.rename_axis('ind', inplace=True)
df.set_index('Organization Group', inplace=True)
df = df.transpose()

# get dictionary, convert and export
d = df.to_dict(orient="index")
for key in d:
  d[k]['year'] = k

res = list(d.values())
with open('./assets/data/sf_yearly_budgets_by_org.json', 'w') as fout:
  json.dump(res, fout)

# print(json.dumps(json.loads(json_out), indent=2))

