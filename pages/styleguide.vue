<script setup>
const { setDarkMode, setLightMode, isDarkMode } = useDarkMode()

const checked = ref(false)
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Tokyo', code: 'TKY' },
  { name: 'Berlin', code: 'BER' },
  { name: 'Madrid', code: 'MAD' },
  { name: 'Moscow', code: 'MSC' },
  { name: 'Beijing', code: 'BJS' }
])

const ingredient = ref('Cheese')
const options = ref(['Long', 'Medium', 'Short'])
const selectButtonValue = ref('Medium')
const selectedCity = ref()
const starRating = ref(4)
const value = ref('sample text')
const valueNumber = ref(12345)
</script>

<template>
  <div class="container px-4">
    <Head>
      <Title>Styleguide</Title>
    </Head>
    <h1>
      Styleguide
      <i v-if="isDarkMode" @click="setLightMode" class="pi pi-sun clickable" />
      <i v-else @click="setDarkMode" class="pi pi-moon clickable mr-2" />
    </h1>

    <Divider class="my-7" />

    <h1 class="mb-3">H1 Lorem Ipsum Dolor</h1>
    <h2 class="mb-3">H2 Lorem Ipsum Dolor Sit Amet</h2>
    <h3 class="mb-3">H3 Lorem Ipsum Dolor Sit Amet</h3>
    <h4 class="mb-3">H4 Lorem Ipsum Dolor Sit Amet</h4>
    <h5 class="mb-3">H5 Lorem Ipsum Dolor Sit Amet</h5>
    <p class="mb-3">
      This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Asperiores, esse eum ex explicabo facere maiores minus mollitia
      nulla qui saepe tempora veritatis. Dolore ducimus fuga provident sed
      temporibus. Ab, perspiciatis.
    </p>
    <p class="mb-3">
      <NuxtLink to="/">This is an inline link.</NuxtLink>
    </p>
    <p class="mb-3">
      Text with a tooltip!
      <i
        class="pi pi-info-circle clickable"
        v-tooltip.right="'Here is the tooltip!'"
      />
    </p>
    <p class="mb-3">
      Here is some <strong>bold text</strong> and some <em>italic text</em>.
    </p>
    <p class="mb-3 small">Here is a paragraph with small text.</p>
    <Divider class="my-7" />

    <div class="flex gap-4 mb-3">
      <div class="bg-blue w-32 h-32"></div>
      <div class="bg-orange w-32 h-32"></div>
      <div class="bg-green w-32 h-32"></div>
      <div class="bg-purple w-32 h-32"></div>
      <div class="bg-red w-32 h-32"></div>
      <div class="bg-light-gray w-32 h-32"></div>
      <div class="bg-dark-gray w-32 h-32"></div>
    </div>

    <Divider class="my-7" />

    <div class="mb-3">
      <InputText placeholder="Email Address" v-model="value" />
    </div>
    <div class="mb-3">
      <Password
        toggleMask
        placeholder="Password"
        v-model="value"
        class="w-full"
      />
    </div>
    <div class="mb-3">
      <InputText disabled placeholder="Disabled" />
    </div>
    <div class="mb-3">
      <InputNumber v-model="valueNumber" inputId="integeronly" prefix="$" />
    </div>
    <div class="mb-3">
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
      />
    </div>
    <div class="mb-3">
      <InputGroup>
        <InputText placeholder="Search" />
        <InputGroupAddon>
          <Button icon="pi pi-search" />
        </InputGroupAddon>
      </InputGroup>
    </div>
    <div class="flex align-items-center mb-3">
      <Checkbox
        v-model="checked"
        inputId="checkbox"
        name="checkbox"
        value="checkbox"
        binary
      />
      <label for="checkbox" class="ml-2"> Checkbox </label>
    </div>
    <div class="flex flex-wrap gap-4 mb-3">
      <div class="flex items-center gap-2">
        <RadioButton
          v-model="ingredient"
          inputId="ingredient1"
          name="pizza"
          value="Cheese"
        />
        <label for="ingredient1">Cheese</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton
          v-model="ingredient"
          inputId="ingredient2"
          name="pizza"
          value="Mushroom"
        />
        <label for="ingredient2">Mushroom</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton
          v-model="ingredient"
          inputId="ingredient3"
          name="pizza"
          value="Pepper"
        />
        <label for="ingredient3">Pepper</label>
      </div>
    </div>
    <Textarea v-model="value" rows="5" cols="30" class="mb-3" />
    <ToggleSwitch v-model="checked" class="block" />
    <divider class="my-7" />
    <div class="flex gap-2 mt-6 mb-4">
      <Button label="Example Button" />
      <Button icon="pi pi-home" label="Button With Icon" />
      <Button icon="pi pi-check" label="Button With Icon" iconPos="right" />
      <Button icon="pi pi-heart" aria-label="Favorite" />
      <Button label="Outlined Button" variant="outlined" />
    </div>
    <div class="flex gap-2 mb-4">
      <Button label="Loading State" icon="pi pi-check" :loading="true" />
      <Button label="Disabled" disabled />
    </div>
    <div class="flex gap-2 mb-4">
      <Button label="small button" size="small" />
      <Button icon="pi pi-external-link" size="small" />
      <Button label="Small Outlined Button" size="small" variant="outlined" />
    </div>
    <divider class="my-7" />
    <div class="flex gap-2 mt-6">
      <Tag value="Primary Tag"></Tag>
      <Tag icon="pi pi-user" value="With Icon"></Tag>
      <Tag severity="contrast" value="Contrast Tag"></Tag>
    </div>
    <divider class="my-7" />
    <ProgressSpinner class="mb-3" />
    <Card class="w-96 mb-3">
      <template #header>
        <img alt="user header" src="https://placehold.co/600x300" />
      </template>
      <template #title>Card Example</template
      ><template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4">
          <Button label="Learn More" />
          <Button label="Cancel" class="block mb-3" variant="outlined" />
        </div>
      </template>
    </Card>
    <divider class="my-7" />
    <Message severity="info" class="mb-3" closable>
      An informative message goes here.
    </Message>
    <Message severity="warn" class="mb-3" closable>
      A warning message goes here.
    </Message>
    <Message severity="error" class="mb-3" closable>
      Sorry, there was a problem logging in to your account.
    </Message>
    <Message class="mb-3" severity="success" closable>
      Success! Please check your email for the magic link.
    </Message>
  </div>
</template>
<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.im-test {
  @include media('<md') {
    color: var(--p-primary-500);
    font-weight: bolder;
  }
}

.reduce-to-three-lines {
  @include truncate;
  @include lineClamp(3);
}
</style>
