import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-sa-east-1.hygraph.com/v2/cl9ohdkd00k9n01umbl0p31ow/master',
  documents: 'src/graphql/queries.ts',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: []
    }
  }
}

export default config
