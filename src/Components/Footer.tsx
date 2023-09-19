const Footer = () => {
    return (
        <div className="bg-sky-800 mt-20">
            <div>
                <h1>Free Spech</h1>
            </div>
            <div>

            </div>
            <hr />
            <div className="flex items-center justify-center gap-4 pt-5 pb-5">
                <div>
                    <h1>Social</h1>
                </div>
                <img className="object border rounded-full p-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVpJREFUSEvdVcFRwzAQ3K0AOoAOIBUAFRAqACoAKoBUQEpIB5AKoAOgA1IBUMEyy0geS5YV7Bl/cjP+SHe7d6u7MzGxcWJ87BiBpH2S3zXZ7APgBsAcwDGATwArkgvHSZqTfI4YiUSS7GyH9z4SSa8ATgr3jjHhHcllh0CSL98AuIILkgZKrOXTx2+SDwDLmGRegVqRzmLRlszlA3iqSPgTFGiSywms3XkG4DN/lm8G4LFCsCbpJBprCMLjHQawg5Hz4YofagRfI4FjWPLAPix10djsjTfLOzAncCf5gfZGVLIhaYkT66yK0CmXYZCG8HTk6UgUJvEUwMsQZAAbD1lpCxSXnSR3wv0AkrPSYBYriKChbT1slqtm1yRXfQ59FVimuND6Yj21tzXwpAJJBnXGR/+QZh3APd1VK3XRFQCTuWUjmReYl+Df2iC5FTiy7tgfbZueY+4nl+gX3293GUCOwckAAAAASUVORK5CYII=" />
                <img className="object border rounded-full p-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMdJREFUSEvtlAsJAkEQhr+/gQ00gg3UJF4EI2gCjWAFG2gCjaANbDAysAfL6b2WPVS4hYWBXf4XMyMGPhoYn98iMLMZsAfmgNd+LpKWdUl0dhDAr8CkApaN4AisPyjNRnAGFoHgBBSSnm1N0icii8B2krZt4P7+XQIzK4BpUBor9rj8ll1U1m+mGh2YWZx7XSKNceUgWElKdnAIQ+Xqyw7y+gHcg6WNpFuOQfvDLoptm9nooHnwx4i6LMakP523aRJ6n3WdSvACKM9fGTlG2HkAAAAASUVORK5CYII=" />
                <img className="object border rounded-full p-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZ5JREFUSEvNlb1NA0EQhb/XARGpTQVABYaEFFMAEnRAB4YKEBkZuAJwSARUYKgAiwb4aWDQQ7tofbbvzoFlRjqddDc7b37evBUrNq04PusBiIguMAB20lNX6Avg50qS31M2U0FEnAA3yesZ+EwB5oE4gQ2gl36eSrotHacAIsIHxoAD9yU5eKOliu+BbWC3rKQKYPQ+0G0TPCKOgQvgCzgC3oChJHfh16oAE2Aiaa+adkQY2BnaXiSNIuIAeADeJXUi4gnoSNpaBBBpWGfZISLc48c5w3awa+Ab2JQ0TAA9SX+JVyswwIWk8wLAzDCrTiS5z6Rq3M6xpP3C16DtAVKgO/c3By+CZbb9/Vu6gohwJYOy5ErrPsqK/yWAmbO6FqWBesidNORR+ub+XwKvJaXbtsiaUqWp2ZF3II9hZtvbADQtmqUkL9ovZUtLAFYB03ruJpvbh8BWG6moBHfQRqnIYueWWBldUaMlsTMZfH6x2BUDzHJtoDq5zpqV3/VyXSyRM/GgfdAMqjMrqRM5b3XhNPZjSYf13MlLJlnr/gN1YvoZXCUOOQAAAABJRU5ErkJggg==" />
                <img className="object border rounded-full p-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYVJREFUSEvVVFFVw0AQnFFAHQAKAAdFAaAAUAA4KA6oAnAAKIA6oA6og6BgeBP28pJr01yBvgf7k5d3tzO7O7NHbDm4ZXz8PwJJhwBGJF89nV/pQNIIwDmAawB7NTBZY/+IQNJpAPvbjgXJL6JNRZbkxCsABq1BAHwAqADsxv8zyZq0iCBGcALgAsA4K2oK4AnAo2cfZzck7wYJQrBUbUpO+IsgdBf3Gelxr8gtwVytHbEqbklOJPlODt4I3OlAklu3E5zUFzOfk3yX5BG4uzzmJJvCGg0kvQE46EG2iJM0V0kPUcyq61OStmsdHZHDdu7EDmgcEVVXMT6PJLdlm+iSpAtYJmjfyjcywF/W6JLSj0h6GusJMjI7qAS8I/DSiPqUDQOYYChmJDt7UrpoTkoEFnynh6m2b/uslMCielPnscn+t01zojOS3uomSglclUHHJP3mIExgt7Stve8d+Q6Bn4MqgSeAcJY78YI2L+jGBEPKRjcuoFN9sYuGCNadF2nwpwk+ASv/hBkwG/chAAAAAElFTkSuQmCC" />
            </div>
        </div>
    );
}
export default Footer;