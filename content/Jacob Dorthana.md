---
tags:
  - People
location:
  - "[[The Empire of Datrus]]"
race: Human
rank: 
born: 
died:
---
<p style="text-align:center;"><img src="https://foundry-vtt-kb.s3.us-east-2.amazonaws.com/Images/Tokens/NPCs/Nobles/" width="250" height="250"></p>

```mermaid
flowchart TB
A["Daniel Dorthana"] --> C["Felicia Dorthana"]
A --> B
subgraph B [" "]
	direction LR
	D["Aaron Dorthana"] --- E["Matilda Eichenwald"]
	end


H["Hugo Dorthana"] ---> A
H ---> I["Jacob Dorthana"]
I ---> F
subgraph F [" "]
	direction LR
	G["Alois Dorthana"] --- J["Andrea Von Elderlot"]
	end

class D,C,E,F,G,J internal-link;
```