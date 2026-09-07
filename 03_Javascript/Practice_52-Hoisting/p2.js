/*Hoisting is the JavaScript engine behavior where declarations (variables, functions, classes) are conceptually moved to the top of their containing scope before code runs. Practically, the engine creates bindings for those identifiers during the creation phase so the code can reference them during the execution phase. How they’re initialized (and whether you can use them) depends on the kind of declaration. 

Two-phase model (creation vs execution)
JS engine (simplified) for each function/global scope:

1. Creation phase (compile-time for that scope):

The engine scans code and creates bindings for var variables, function declarations, let/const bindings, class bindings, parameters, etc.

For var, the binding is created and initialized to undefined immediately.

For function declarations, the binding is created and initialized to the actual function object (callable).

For let/const/class, the binding is created but not initialized — it enters the Temporal Dead Zone (TDZ) until execution reaches the declaration.

2. Execution phase (runtime):

Code runs line by line. When execution reaches a let/const/class declaration, the binding becomes initialized with the value.*/