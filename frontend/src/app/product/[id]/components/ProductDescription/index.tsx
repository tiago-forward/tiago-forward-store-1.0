export default function ProductDescription() {
    return (
        <div className="max-w-7xl px-2 mt-4">
            <header>
                <h2 className="font-bold text-xl mb-4">
                    Cereja Avelã - A combinação perfeita entre doçura e sofisticação
                </h2>
            </header>

            <section aria-labelledby="description-heading">
                <h3 id="description-heading" className="sr-only">Descrição do Produto</h3>
                <p>
                    Descubra a magia do aroma Cereja Avelã, uma fusão irresistível que transforma qualquer ambiente em um verdadeiro oásis de tranquilidade e aconchego. Esta vela combina a doçura suculenta da cereja madura com a elegância cremosa e levemente torrada da avelã, criando uma atmosfera envolvente e acolhedora.
                </p>
                <p>
                    Ideal para momentos de relaxamento ou para dar um toque especial aos encontros com amigos e familiares, o aroma Cereja Avelã desperta sensações de conforto e prazer. Permita-se ser transportado para um mundo onde o simples ato de acender uma vela pode transformar seu dia.
                </p>
                <p>Aprecie cada momento com a sofisticação e a delicadeza deste aroma único.</p>
            </section>

            <section aria-labelledby="characteristics-heading">
                <h3 className='text-md font-bold my-4 uppercase' id="characteristics-heading">Características</h3>
                <ul>
                    <li><strong>Aroma:</strong> Cereja, Avelã</li>
                    <li><strong>Intensidade:</strong> 5/5</li>
                    <li><strong>Sensações:</strong> Aconchegante, Conforto, Quente, Romantismo</li>
                    <li><strong>Peso:</strong> Aproximadamente 100g</li>
                    <li><strong>Tempo de Duração:</strong> 20 a 25 Horas Aproximadamente</li>
                    <li><strong>Material:</strong> 100% Cera de Coco Vegetal Vegana, Essência da A Saboraria</li>
                    <li><strong>Embalagem:</strong> Pote de Vidro de 156ml com Tampa de Madeira</li>
                </ul>
            </section>

            <section aria-labelledby="usage-heading">
                <h3 className='text-md font-bold my-4 uppercase' id="usage-heading">Modo de Uso</h3>
                <ul>
                    <li>Deixe a vela queimar até que a superfície derreta por completo para evitar o túnel.</li>
                    <li>Mantenha acesa por no máximo 3 horas consecutivas.</li>
                    <li>Apare o pavio antes de cada uso, deixando cerca de 0,4cm.</li>
                    <li>Use sobre uma superfície resistente ao calor e longe de correntes de ar.</li>
                    <li>Aguarde entre 45 a 60 minutos para sentir toda a fragrância espalhada no ambiente fechado onde a vela está sendo utilizada.</li>
                </ul>
            </section>

            <section aria-labelledby="care-heading">
                <h3 className='text-md font-bold my-4 uppercase' id="care-heading">Cuidados</h3>
                <ul>
                    <li>Não deixe a vela acesa sem supervisão e certifique-se de que ela queime em um local seguro.</li>
                    <li>Mantenha fora do alcance de crianças, animais de estimação e materiais inflamáveis.</li>
                    <li>Utilize sobre superfícies resistentes ao calor.</li>
                    <li>Não acenda a vela perto de correntes de ar para evitar possíveis acidentes.</li>
                    <li>Ao apagar a vela, aguarde a cera esfriar antes de mover o recipiente.</li>
                    <li>Quando restar menos de 1 cm de cera no fundo do recipiente, descarte o uso do restante do material.</li>
                    <li>Se o pavio se soltar, apague a vela e centralize o pavio com uma pinça.</li>
                    <li>Se a chama estiver muito alta, reduza o pavio para 0,4cm.</li>
                    <li>Se o recipiente estiver rachado, não use a vela, pois há risco de incêndio ou acidentes.</li>
                </ul>
            </section>
        </div>
    );
}
