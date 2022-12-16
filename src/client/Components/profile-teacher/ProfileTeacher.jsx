import React from 'react'
import './ProfileTeacher.css'
import profesor from '../../assets/profesor.jpg'
import { Link } from 'react-router-dom'

export const ProfileTeacher = () => {
  return (
    <div>
      <div className='profile-container'>
      <h2>Perfil Profesor</h2>
      <hr />

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Foto de Perfil</label>
          <figure>
            <img src={profesor} alt="" />
          </figure>
        </div>
        <button className='upload' type={'submit'}>Archivo</button>
      </div>

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Nombre</label>
        </div>
        <input type="text" placeholder='Nombre'/>
      </div>

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Apellido</label>
        </div>
        <input type="text" placeholder='Apellido'/>
      </div>

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Ubicacion</label>
        </div>
        <select placeholder='Selecciona tu pais'>
          <option value="">Selecciona una opcion</option>
          <option value="1">Afganist&#225;n</option>
          <option value="3">Albania</option>
          <option value="4">Alemania</option>
          <option value="5">Andorra</option>
          <option value="6">Angola</option>
          <option value="7">Anguilla</option>
          <option value="8">Ant&#225;rtida</option>
          <option value="9">Antigua y Barbuda</option>
          <option value="10">Antillas Holandesas</option>
          <option value="11">Arabia Saud&#237;</option>
          <option value="12">Argelia</option>
          <option selected="selected" value="13">Argentina</option>
          <option value="14">Armenia</option>
          <option value="15">Aruba</option>
          <option value="131">ARY Macedonia</option>
          <option value="16">Australia</option>
          <option value="17">Austria</option>
          <option value="18">Azerbaiy&#225;n</option>
          <option value="19">Bahamas</option>
          <option value="20">Bahr&#233;in</option>
          <option value="21">Bangladesh</option>
          <option value="22">Barbados</option>
          <option value="24">B&#233;lgica</option>
          <option value="25">Belice</option>
          <option value="26">Benin</option>
          <option value="27">Bermudas</option>
          <option value="28">Bhut&#225;n</option>
          <option value="23">Bielorrusia</option>
          <option value="29">Bolivia</option>
          <option value="30">Bosnia y Herzegovina</option>
          <option value="31">Botsuana</option>
          <option value="33">Brasil</option>
          <option value="34">Brun&#233;i</option>
          <option value="35">Bulgaria</option>
          <option value="36">Burkina Faso</option>
          <option value="37">Burundi</option>
          <option value="38">Cabo Verde</option>
          <option value="40">Camboya</option>
          <option value="41">Camer&#250;n</option>
          <option value="42">Canad&#225;</option>
          <option value="44">Chad</option>
          <option value="46">Chile</option>
          <option value="47">China</option>
          <option value="48">Chipre</option>
          <option value="50">Ciudad del Vaticano</option>
          <option value="52">Colombia</option>
          <option value="53">Comoras</option>
          <option value="55">Congo</option>
          <option value="57">Corea del Norte</option>
          <option value="58">Corea del Sur</option>
          <option value="59">Costa de Marfil</option>
          <option value="60">Costa Rica</option>
          <option value="61">Croacia</option>
          <option value="62">Cuba</option>
          <option value="63">Dinamarca</option>
          <option value="64">Dominica</option>
          <option value="66">Ecuador</option>
          <option value="67">Egipto</option>
          <option value="68">El Salvador</option>
          <option value="69">Emiratos &#193;rabes Unidos</option>
          <option value="70">Eritrea</option>
          <option value="71">Eslovaquia</option>
          <option value="72">Eslovenia</option>
          <option value="73">Espa&#241;a</option>
          <option value="75">Estados Unidos</option>
          <option value="76">Estonia</option>
          <option value="77">Etiop&#237;a</option>
          <option value="79">Filipinas</option>
          <option value="80">Finlandia</option>
          <option value="81">Fiyi</option>
          <option value="82">Francia</option>
          <option value="83">Gab&#243;n</option>
          <option value="84">Gambia</option>
          <option value="85">Georgia</option>
          <option value="87">Ghana</option>
          <option value="88">Gibraltar</option>
          <option value="89">Granada</option>
          <option value="90">Grecia</option>
          <option value="91">Groenlandia</option>
          <option value="92">Guadalupe</option>
          <option value="93">Guam</option>
          <option value="94">Guatemala</option>
          <option value="95">Guayana Francesa</option>
          <option value="96">Guinea</option>
          <option value="97">Guinea Ecuatorial</option>
          <option value="98">Guinea-Bissau</option>
          <option value="99">Guyana</option>
          <option value="100">Hait&#237;</option>
          <option value="102">Honduras</option>
          <option value="103">Hong Kong</option>
          <option value="104">Hungr&#237;a</option>
          <option value="105">India</option>
          <option value="106">Indonesia</option>
          <option value="107">Ir&#225;n</option>
          <option value="108">Iraq</option>
          <option value="109">Irlanda</option>
          <option value="32">Isla Bouvet</option>
          <option value="49">Isla de Navidad</option>
          <option value="161">Isla Norfolk</option>
          <option value="110">Islandia</option>
          <option value="39">Islas Caim&#225;n</option>
          <option value="51">Islas Cocos</option>
          <option value="56">Islas Cook</option>
          <option value="78">Islas Feroe</option>
          <option value="86">Islas Georgias del Sur y Sandwich del Sur</option>
          <option value="2">Islas Gland</option>
          <option value="101">Islas Heard y McDonald</option>
          <option value="138">Islas Malvinas</option>
          <option value="139">Islas Marianas del Norte</option>
          <option value="141">Islas Marshall</option>
          <option value="174">Islas Pitcairn</option>
          <option value="186">Islas Salom&#243;n</option>
          <option value="223">Islas Turcas y Caicos</option>
          <option value="234">Islas V&#237;rgenes Brit&#225;nicas</option>
          <option value="111">Israel</option>
          <option value="112">Italia</option>
          <option value="113">Jamaica</option>
          <option value="114">Jap&#243;n</option>
          <option value="115">Jordania</option>
          <option value="116">Kazajst&#225;n</option>
          <option value="117">Kenia</option>
          <option value="118">Kirguist&#225;n</option>
          <option value="119">Kiribati</option>
          <option value="120">Kuwait</option>
          <option value="121">Laos</option>
          <option value="122">Lesotho</option>
          <option value="123">Letonia</option>
          <option value="124">L&#237;bano</option>
          <option value="125">Liberia</option>
          <option value="126">Libia</option>
          <option value="127">Liechtenstein</option>
          <option value="128">Lituania</option>
          <option value="129">Luxemburgo</option>
          <option value="130">Macao</option>
          <option value="132">Madagascar</option>
          <option value="133">Malasia</option>
          <option value="134">Malawi</option>
          <option value="135">Maldivas</option>
          <option value="136">Mal&#237;</option>
          <option value="137">Malta</option>
          <option value="140">Marruecos</option>
          <option value="142">Martinica</option>
          <option value="143">Mauricio</option>
          <option value="144">Mauritania</option>
          <option value="145">Mayotte</option>
          <option value="146">M&#233;xico</option>
          <option value="147">Micronesia</option>
          <option value="148">Moldavia</option>
          <option value="149">M&#243;naco</option>
          <option value="150">Mongolia</option>
          <option value="151">Montserrat</option>
          <option value="152">Mozambique</option>
          <option value="153">Myanmar</option>
          <option value="154">Namibia</option>
          <option value="155">Nauru</option>
          <option value="156">Nepal</option>
          <option value="157">Nicaragua</option>
          <option value="158">N&#237;ger</option>
          <option value="159">Nigeria</option>
          <option value="160">Niue</option>
          <option value="162">Noruega</option>
          <option value="163">Nueva Caledonia</option>
          <option value="164">Nueva Zelanda</option>
          <option value="165">Om&#225;n</option>
          <option value="166">Pa&#237;ses Bajos</option>
          <option value="167">Pakist&#225;n</option>
          <option value="168">Palau</option>
          <option value="169">Palestina</option>
          <option value="170">Panam&#225;</option>
          <option value="171">Pap&#250;a Nueva Guinea</option>
          <option value="172">Paraguay</option>
          <option value="173">Per&#250;</option>
          <option value="175">Polinesia Francesa</option>
          <option value="176">Polonia</option>
          <option value="177">Portugal</option>
          <option value="178">Puerto Rico</option>
          <option value="179">Qatar</option>
          <option value="180">Reino Unido</option>
          <option value="43">Rep&#250;blica Centroafricana</option>
          <option value="45">Rep&#250;blica Checa</option>
          <option value="54">Rep&#250;blica Democr&#225;tica del Congo</option>
          <option value="65">Rep&#250;blica Dominicana</option>
          <option value="181">Reuni&#243;n</option>
          <option value="182">Ruanda</option>
          <option value="183">Rumania</option>
          <option value="184">Rusia</option>
          <option value="185">Sahara Occidental</option>
          <option value="187">Samoa</option>
          <option value="188">Samoa Americana</option>
          <option value="189">San Crist&#243;bal y Nevis</option>
          <option value="190">San Marino</option>
          <option value="191">San Pedro y Miquel&#243;n</option>
          <option value="192">San Vicente y las Granadinas</option>
          <option value="193">Santa Helena</option>
          <option value="194">Santa Luc&#237;a</option>
          <option value="195">Santo Tom&#233; y Pr&#237;ncipe</option>
          <option value="-1">Seleccionar Pa&#237;s</option>
          <option value="196">Senegal</option>
          <option value="197">Serbia y Montenegro</option>
          <option value="198">Seychelles</option>
          <option value="199">Sierra Leona</option>
          <option value="200">Singapur</option>
          <option value="201">Siria</option>
          <option value="202">Somalia</option>
          <option value="203">Sri Lanka</option>
          <option value="204">Suazilandia</option>
          <option value="205">Sud&#225;frica</option>
          <option value="206">Sud&#225;n</option>
          <option value="207">Suecia</option>
          <option value="208">Suiza</option>
          <option value="209">Surinam</option>
          <option value="210">Svalbard y Jan Mayen</option>
          <option value="211">Tailandia</option>
          <option value="212">Taiw&#225;n</option>
          <option value="213">Tanzania</option>
          <option value="214">Tayikist&#225;n</option>
          <option value="215">Territorio Brit&#225;nico del Oc&#233;ano &#205;ndico</option>
          <option value="216">Territorios Australes Franceses</option>
          <option value="217">Timor Oriental</option>
          <option value="218">Togo</option>
          <option value="219">Tokelau</option>
          <option value="220">Tonga</option>
          <option value="221">Trinidad y Tobago</option>
          <option value="222">T&#250;nez</option>
          <option value="224">Turkmenist&#225;n</option>
          <option value="225">Turqu&#237;a</option>
          <option value="226">Tuvalu</option>
          <option value="227">Ucrania</option>
          <option value="228">Uganda</option>
          <option value="229">Uruguay</option>
          <option value="230">Uzbekist&#225;n</option>
          <option value="231">Vanuatu</option>
          <option value="232">Venezuela</option>
          <option value="233">Vietnam</option>
          <option value="236">Wallis y Futuna</option>
          <option value="237">Yemen</option>
          <option value="238">Yibuti</option>
          <option value="239">Zambia</option>
          <option value="240">Zimbabue</option>
        </select>
      </div>

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Email de contacto</label>
        </div>
        <input type="email" name="" id="" placeholder='Email' />
      </div>

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Titulos</label>
        </div>
        <input type="text" placeholder='Titulos'/>
      </div>

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Experiencia</label>
        </div>
        <input type="text" placeholder='Experiencia'/>
      </div>

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Tu celular</label>
        </div>
        <input type="text" placeholder='Telefono'/>
      </div>

      <div className='profile-flex'>
        <div className='label-ctn'>
          <label>Presentación</label>
        </div>
        <input type="text" placeholder='Describa su perfil'/>
      </div>

      <button>Guardar</button>
    </div>
    </div>
  )
}
