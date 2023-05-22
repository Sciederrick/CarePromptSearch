<script setup lang="ts">
    definePageMeta({
        layout: 'blank'
    });

    import {
        AisInstantSearch,
        AisHits,
        AisSearchBox,
        AisStats,
        AisPagination,
        AisConfigure,
        AisHighlight,
        } from 'vue-instantsearch/vue3/es';
    import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
  
    const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
        server: {
            apiKey: "L2uUKPQLlkBK5vbrnzR2NtH8fWd3y4yS", // Be sure to use an API key that only allows search operations
            nodes: [
            {
                host: "5fw8k6jch9oqpv34p-1.a1.typesense.net",
                path: "", // Optional. Example: If you have your typesense mounted in localhost:8108/typesense, path should be equal to '/typesense'
                port: 443,
                protocol: "https",
            },
            ],
            cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
        },
        // The following parameters are directly passed to Typesense's search API endpoint.
        //  So you can pass any parameters supported by the search endpoint below.
        //  query_by is required.
        additionalSearchParameters: {
            query_by: "title,description,content_type,tags",
        },
    });
    const searchClient = typesenseInstantsearchAdapter.searchClient;
    const hitsPerPage = 10;
    const starQueryResults = { 'out_of': 1 }
 </script>

<template>
    <AisInstantSearch :search-client="searchClient" index-name="treatments">
        <AisConfigure :hits-per-page.camel="hitsPerPage" />
      <AisSearchBox />
      <AisHits>
        <template v-slot="item" slot-scope="{ item }">
            <div v-for="r in item.items">
                <SearchResult :title="r.title" :desc="r.description" :date="r.created_at" />
            </div>
        </template>
      </AisHits>
      <AisPagination
        :show-first="true"
        :show-previous="true"
        :show-next="true"
        :show-last="true"
        :padding="5"
        :total-pages="10"
        :class-names="{}"
        />
    </AisInstantSearch>
</template>

