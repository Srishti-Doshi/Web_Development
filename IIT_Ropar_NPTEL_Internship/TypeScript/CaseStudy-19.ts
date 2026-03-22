/*
Case Study: IoC Containers & Advanced Dependency Management in TypeScript

As the News Aggregator platform grows, manually creating and wiring
dependencies (news sources, loggers, cache, analytics) becomes
error-prone and hard to scale.

An IoC (Inversion of Control) container like TypeDI automates
dependency creation and injection, making the system modular,
testable, and easy to extend.
*/

import "reflect-metadata";
import { Service, Inject, Container } from "typedi";


// ==========================================================
// STEP 1: DEFINE CONTRACT (INTERFACE)
// ==========================================================

interface NewsSource {
  fetchArticles(): Promise<string[]>;
}


// ==========================================================
// STEP 2: CONCRETE IMPLEMENTATIONS
// ==========================================================

@Service()
class RSSFeedSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return [
      "RSS: TypeScript 5.0 Released",
      "RSS: IoC Containers Explained"
    ];
  }
}

@Service()
class APISource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return [
      "API: Breaking Tech News",
      "API: Advanced TypeScript Patterns"
    ];
  }
}


// ==========================================================
// STEP 3: MAIN BUSINESS CLASS (DEPENDENCY INJECTION)
// ==========================================================

@Service()
class NewsAggregator {
  constructor(
    @Inject(() => RSSFeedSource)
    private source: NewsSource
  ) {}

  async showHeadlines(): Promise<void> {
    const articles = await this.source.fetchArticles();
    articles.forEach(article => console.log(article));
  }
}


// ==========================================================
// STEP 4: RESOLVE USING IoC CONTAINER
// ==========================================================

const aggregator = Container.get(NewsAggregator);
console.log("---- Using RSS Feed Source ----");
aggregator.showHeadlines();


// ==========================================================
// STEP 5: SWAP IMPLEMENTATION (NO CODE CHANGE)
// ==========================================================

// Override dependency with APISource
Container.set(RSSFeedSource, new APISource());

const aggregatorWithAPI = Container.get(NewsAggregator);
console.log("---- Using API Source ----");
aggregatorWithAPI.showHeadlines();


// ==========================================================
// STEP 6: TESTING WITH MOCK SOURCE (CHALLENGE SOLUTION)
// ==========================================================

class MockNewsSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["Mock: Test Article"];
  }
}

// Inject mock dependency
Container.set(RSSFeedSource, new MockNewsSource());

const testAggregator = Container.get(NewsAggregator);
console.log("---- Using Mock Source (Testing) ----");
testAggregator.showHeadlines();


/*
Conclusion:
IoC Containers remove the responsibility of dependency creation
from business logic. By using TypeDI, we can register, resolve,
and swap dependencies centrally without modifying core classes.

This results in cleaner code, easier testing, and better scalability.
*/
