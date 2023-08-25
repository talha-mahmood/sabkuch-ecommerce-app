import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skbEQwncb7mQn3NHk1KtoEzFbl0MxlhFpUQ8A5gboOU9YgZZPE5qas07h7YTUHS0LNv3vYw5DBjJ7YulZbXZYU21PjUbui85kgafwMP1eX5GAqirf6345aqyLx8BSwMSoh7SRk5jhg7K2XviDBmUgF6TNS0Z1wbBaR2henIypOyby0Tn3WnJ"
})
